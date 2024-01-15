import candidateData from '@/src/data/candidateData.json';
import { AxiosRequestConfig } from 'axios';
import _ from 'lodash';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import CandidateItem from '../src/components/frontend/candidate/candidate-item';
import { CandidateFilter } from '../src/components/frontend/filter/search-filter';
import Layout from '../src/components/frontend/layout';
import PageTitle from '../src/components/frontend/page-title';
import Pagination from '../src/components/frontend/pagination';
import useUser from '../src/components/lib/user';
import ImageOpt from '../src/components/optimize/image';
import { Axios } from '../src/components/utils/axiosKits';

const fetcher = (url: AxiosRequestConfig<any>) =>
    Axios(url).then((res) => res.data.data);
let CandidateAPI = '/resumes/search';

function CandidateDataList() {
    // get current pages
    const [currentPage, setCurrentPage] = React.useState(0);
    const [candidatePerPage] = React.useState(9);
    const [AllResumes, setAllResumes] = React.useState({}) as any;
    const router = useRouter();
    const { user, isEmployer, loggedIn } = useUser();
    const API =
        router.pathname === router.asPath
            ? `${CandidateAPI}?page=${currentPage}`
            : `${CandidateAPI}${router.asPath
                  .replace('/candidate', '')
                  .replace(/%2C/g, ',')}&page=${currentPage}`;
    const { data, error } = useSWR(API, fetcher, {
        fallbackData: candidateData,
    });

    React.useEffect(() => {
        if (!data.loading) {
            setAllResumes(data);
        }
    }, [data]);

    const handlePageChange = (data: any) => {
        setCurrentPage(data.selected);
    };

    if (error) return <div>Error! {error.message}</div>;
    if (!data)
        return (
            <div className="h-80 w-full flex justify-center items-center">
                <h1 className="text-5xl font-semibold text-center">
                    Loading...
                </h1>
            </div>
        );
    return (
        <>
            <section className="pt-16 pb-20 !bg-light">
                <div className="container 2xl:px-0">
                    <div className="xl:grid grid-cols-12 gap-6">
                        <CandidateFilter setCurrentPage={setCurrentPage} />

                        <div className="col-span-9">
                            <div className="bg-white rounded-md md:flex flex-wrap justify-between items-center mb-6 py-2.5 md:py-2">
                                <p className="text-xs font-bold text-black leading-4 px-6 py-2.5 mb-6 md:mb-0">
                                    We have found{' '}
                                    <span className="text-themePrimary">
                                        {data?.totalResumeCount}
                                    </span>{' '}
                                    Candidate
                                </p>
                                <div className="text-center mr-2.5">
                                    {loggedIn ? (
                                        !isEmployer && (
                                            <Link href="/resume/add-resume">
                                                <a className="w-auto block bg-themePrimary text-white px-6 py-2.5 text-xss font-medium rounded-md hover:bg-black transition-all outline-none">
                                                    Upload Your Resume
                                                </a>
                                            </Link>
                                        )
                                    ) : (
                                        <Link href="/resume/add-resume">
                                            <a className="w-auto block bg-themePrimary text-white px-6 py-2.5 text-xss font-medium rounded-md hover:bg-black transition-all outline-none">
                                                Upload Your Resume
                                            </a>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                                {data?.loading &&
                                    _.map(data.resumes, (item) => (
                                        <div key={item.id}>
                                            <ImageOpt
                                                src={item?.img}
                                                alt="image"
                                                width={315}
                                                height={393}
                                            />
                                        </div>
                                    ))}
                                {!data?.loading &&
                                    AllResumes?.resumes?.length > 0 &&
                                    _.map(AllResumes?.resumes, (item) => (
                                        <CandidateItem
                                            key={item._id}
                                            item={item}
                                        />
                                    ))}
                            </div>
                            {AllResumes?.resumes?.length === 0 && (
                                <div className="h-80 flex justify-center items-center text-center">
                                    <h2 className="text-4xl font-semibold">
                                        No Data Found ☹️
                                    </h2>
                                </div>
                            )}

                            {AllResumes?.totalResumeCount >
                                candidatePerPage && (
                                <Pagination
                                    totalCount={AllResumes.totalResumeCount} // total number of data
                                    showPerPage={candidatePerPage}
                                    handlePageChange={handlePageChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default function Candidate() {
    const { user, loggedIn } = useUser();

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Explore the expert candidates. Find all candidates."
                />
            </Head>

            <Layout>
                <main>
                    <PageTitle title="Candidate List" />
                    
                    {loggedIn ? (
                        <div>
                            <p>Welcome, {user?.name}!</p>
                            <CandidateDataList />
                        </div>
                    ) : (
                        <p>Please sign in to view the candidate list.</p>
                    )}
                </main>
            </Layout>
        </>
    );
}