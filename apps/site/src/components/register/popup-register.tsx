import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { ThemeContext } from '../../context/ThemeContext';
import { FormLoader } from '../lib/loader';
import { Axios } from '../utils/axiosKits';

const PopupRegister = () => {
    const { RegisterPopup, RegisterPopupHandler, LoginPopupHandler } =
        React.useContext(ThemeContext) as any;
    const [CurrentPage, setCurrentPage] = React.useState(1);
    const { addToast } = useToasts();
const [phoneNumber, setPhoneNumber] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();
 const citiesData = {
        "List Of Cities And Towns In Ind": [
            {
      "S.No": 1,
      "Name of City": "Mumbai",
      "State": "Maharashtra"
    },
    {
      "S.No": 2,
      "Name of City": "Delhi",
      "State": "Delhi"
    },
    {
      "S.No": 3,
      "Name of City": "Andman & Nicobar Island",
      "State": "Andaman & Nicobar Island"
    },
    {
      "S.No": 4,
      "Name of City": "Adilabad",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 5,
      "Name of City": "Anantapur",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 6,
      "Name of City": "Chittoor",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 7,
      "Name of City": "East Godavari",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 8,
      "Name of City": "Guntur",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 9,
      "Name of City": "Hyderabad",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 10,
      "Name of City": "Kadapa",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 11,
      "Name of City": "Karimnagar",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 12,
      "Name of City": "Khammam/Bhadrachalam",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 13,
      "Name of City": "Krishna",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 14,
      "Name of City": "Kurnool",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 15,
      "Name of City": "Mahbubnagar",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 16,
      "Name of City": "Medak",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 17,
      "Name of City": "Nalgonda",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 18,
      "Name of City": "Nellore",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 19,
      "Name of City": "Nizamabad",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 20,
      "Name of City": "Prakasam",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 21,
      "Name of City": "Rangareddi",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 22,
      "Name of City": "Srikakulam",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 23,
      "Name of City": "Visakhapatnam",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 24,
      "Name of City": "Vizianagaram",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 25,
      "Name of City": "Warangal",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 26,
      "Name of City": "West Godavari",
      "State": "Andhra Pradesh"
    },
    {
      "S.No": 27,
      "Name of City": "Anjaw",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 28,
      "Name of City": "Changlang",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 29,
      "Name of City": "East Kameng",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 30,
      "Name of City": "East Siang",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 31,
      "Name of City": "Kurung Kumey",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 32,
      "Name of City": "Lohit",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 33,
      "Name of City": "Lower Dibang Valley",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 34,
      "Name of City": "Lower Subansiri",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 35,
      "Name of City": "Papum Pare",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 36,
      "Name of City": "Tawang",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 37,
      "Name of City": "Tirap",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 38,
      "Name of City": "Upper Dibang Valley",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 39,
      "Name of City": "Upper Siang",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 40,
      "Name of City": "Upper Subansiri",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 41,
      "Name of City": "West Kameng",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 42,
      "Name of City": "West Siang",
      "State": "Arunachal Pradesh"
    },
    {
      "S.No": 43,
      "Name of City": "Baksa",
      "State": "Assam"
    },
    {
      "S.No": 44,
      "Name of City": "Barpeta",
      "State": "Assam"
    },
    {
      "S.No": 45,
      "Name of City": "Bongaigaon",
      "State": "Assam"
    },
    {
      "S.No": 46,
      "Name of City": "Cachar",
      "State": "Assam"
    },
    {
      "S.No": 47,
      "Name of City": "Chirang",
      "State": "Assam"
    },
    {
      "S.No": 48,
      "Name of City": "Darrang",
      "State": "Assam"
    },
    {
      "S.No": 49,
      "Name of City": "Dhemaji",
      "State": "Assam"
    },
    {
      "S.No": 50,
      "Name of City": "Dhubri",
      "State": "Assam"
    },
    {
      "S.No": 51,
      "Name of City": "Dibrugarh",
      "State": "Assam"
    },
    {
      "S.No": 52,
      "Name of City": "Goalpara",
      "State": "Assam"
    },
    {
      "S.No": 53,
      "Name of City": "Golaghat",
      "State": "Assam"
    },
    {
      "S.No": 54,
      "Name of City": "Hailakandi",
      "State": "Assam"
    },
    {
      "S.No": 55,
      "Name of City": "Jorhat",
      "State": "Assam"
    },
    {
      "S.No": 56,
      "Name of City": "Kamrup",
      "State": "Assam"
    },
    {
      "S.No": 57,
      "Name of City": "Karbi Anglong",
      "State": "Assam"
    },
    {
      "S.No": 58,
      "Name of City": "Karimganj",
      "State": "Assam"
    },
    {
      "S.No": 59,
      "Name of City": "Kokrajhar",
      "State": "Assam"
    },
    {
      "S.No": 60,
      "Name of City": "Lakhimpur",
      "State": "Assam"
    },
    {
      "S.No": 61,
      "Name of City": "Marigaon",
      "State": "Assam"
    },
    {
      "S.No": 62,
      "Name of City": "Nagaon",
      "State": "Assam"
    },
    {
      "S.No": 63,
      "Name of City": "Nalbari",
      "State": "Assam"
    },
    {
      "S.No": 64,
      "Name of City": "North Cachar Hills",
      "State": "Assam"
    },
    {
      "S.No": 65,
      "Name of City": "Sibsagar",
      "State": "Assam"
    },
    {
      "S.No": 66,
      "Name of City": "Sonitpur",
      "State": "Assam"
    },
    {
      "S.No": 67,
      "Name of City": "Tinsukia",
      "State": "Assam"
    },
    {
      "S.No": 68,
      "Name of City": "Udalguri",
      "State": "Assam"
    },
    {
      "S.No": 69,
      "Name of City": "Araria",
      "State": "Bihar"
    },
    {
      "S.No": 70,
      "Name of City": "Arwal",
      "State": "Bihar"
    },
    {
      "S.No": 71,
      "Name of City": "Aurangabad-Bi",
      "State": "Bihar"
    },
    {
      "S.No": 72,
      "Name of City": "Banka",
      "State": "Bihar"
    },
    {
      "S.No": 73,
      "Name of City": "Begusarai",
      "State": "Bihar"
    },
    {
      "S.No": 74,
      "Name of City": "Bhagalpur",
      "State": "Bihar"
    },
    {
      "S.No": 75,
      "Name of City": "Bhojpur",
      "State": "Bihar"
    },
    {
      "S.No": 76,
      "Name of City": "Buxar",
      "State": "Bihar"
    },
    {
      "S.No": 77,
      "Name of City": "Darbhanga",
      "State": "Bihar"
    },
    {
      "S.No": 78,
      "Name of City": "East Champaran",
      "State": "Bihar"
    },
    {
      "S.No": 79,
      "Name of City": "Gaya",
      "State": "Bihar"
    },
    {
      "S.No": 80,
      "Name of City": "Gopalganj",
      "State": "Bihar"
    },
    {
      "S.No": 81,
      "Name of City": "Jamui",
      "State": "Bihar"
    },
    {
      "S.No": 82,
      "Name of City": "Jehanabad",
      "State": "Bihar"
    },
    {
      "S.No": 83,
      "Name of City": "Kaimur",
      "State": "Bihar"
    },
    {
      "S.No": 84,
      "Name of City": "Katihar",
      "State": "Bihar"
    },
    {
      "S.No": 85,
      "Name of City": "Khagaria",
      "State": "Bihar"
    },
    {
      "S.No": 86,
      "Name of City": "Kishanganj",
      "State": "Bihar"
    },
    {
      "S.No": 87,
      "Name of City": "Lakhisarai",
      "State": "Bihar"
    },
    {
      "S.No": 88,
      "Name of City": "Madhepura",
      "State": "Bihar"
    },
    {
      "S.No": 89,
      "Name of City": "Madhubani",
      "State": "Bihar"
    },
    {
      "S.No": 90,
      "Name of City": "Munger",
      "State": "Bihar"
    },
    {
      "S.No": 91,
      "Name of City": "Muzaffarpur",
      "State": "Bihar"
    },
    {
      "S.No": 92,
      "Name of City": "Nalanda",
      "State": "Bihar"
    },
    {
      "S.No": 93,
      "Name of City": "Nawada",
      "State": "Bihar"
    },
    {
      "S.No": 94,
      "Name of City": "Patna",
      "State": "Bihar"
         },
      {
      "S.No": 94,
      "Name of City": "Rohtas",
      "State": "Bihar"
    },
    {
      "S.No": 95,
      "Name of City": "Saharsa",
      "State": "Bihar"
    },
    {
      "S.No": 96,
      "Name of City": "Samastipur",
      "State": "Bihar"
    },
    {
      "S.No": 97,
      "Name of City": "Saran",
      "State": "Bihar"
    },
    {
      "S.No": 98,
      "Name of City": "Sheikhpura",
      "State": "Bihar"
    },
    {
      "S.No": 99,
      "Name of City": "Sheohar",
      "State": "Bihar"
    },
    {
      "S.No": 100,
      "Name of City": "Sitamarhi",
      "State": "Bihar"
    },
    {
      "S.No": 101,
      "Name of City": "Siwan",
      "State": "Bihar"
    },
    {
      "S.No": 102,
      "Name of City": "Supaul",
      "State": "Bihar"
    },
    {
      "S.No": 103,
      "Name of City": "Vaishali",
      "State": "Bihar"
    },
    {
      "S.No": 104,
      "Name of City": "West Champaran",
      "State": "Bihar"
    },
    {
      "S.No": 105,
      "Name of City": "Bastar",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 106,
      "Name of City": "Bilaspur",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 107,
      "Name of City": "Dantewada",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 108,
      "Name of City": "Dhamtari",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 109,
      "Name of City": "Durg",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 110,
      "Name of City": "Janjgir",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 111,
      "Name of City": "Jashpur",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 112,
      "Name of City": "Kanker",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 113,
      "Name of City": "Kawardha (Kabir Dham)",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 114,
      "Name of City": "Korba",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 115,
      "Name of City": "Koriya",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 116,
      "Name of City": "Mahasamund",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 117,
      "Name of City": "Raigarh (CG)",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 118,
      "Name of City": "Raipur",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 119,
      "Name of City": "Rajnandgaon",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 120,
      "Name of City": "Surguja (Ambikapur)",
      "State": "Chhattisgarh"
    },
    {
      "S.No": 121,
      "Name of City": "Chandigarh",
      "State": "Chandigarh"
    },
    {
      "S.No": 122,
      "Name of City": "Daman",
      "State": "Daman & Diu"
    },
    {
      "S.No": 123,
      "Name of City": "Diu",
      "State": "Daman & Diu"
    },
    {
      "S.No": 124,
      "Name of City": "Central",
      "State": "Delhi"
    },
    {
      "S.No": 125,
      "Name of City": "City Zone",
      "State": "Delhi"
    },
    {
      "S.No": 126,
      "Name of City": "Civil Lines",
      "State": "Delhi"
    },
    {
      "S.No": 127,
      "Name of City": "Karol Bagh",
      "State": "Delhi"
    },
    {
      "S.No": 128,
      "Name of City": "Najafgarh",
      "State": "Delhi"
    },
    {
      "S.No": 129,
      "Name of City": "Narela",
      "State": "Delhi"
    },
    {
      "S.No": 130,
      "Name of City": "Rohini",
      "State": "Delhi"
    },
    {
      "S.No": 131,
      "Name of City": "S. Pahar Ganj",
      "State": "Delhi"
    },
    {
      "S.No": 132,
      "Name of City": "Shahadra (N)",
      "State": "Delhi"
    },
    {
      "S.No": 133,
      "Name of City": "Shahadra (S)",
      "State": "Delhi"
    },
    {
      "S.No": 134,
      "Name of City": "South",
      "State": "Delhi"
    },
    {
      "S.No": 135,
      "Name of City": "West",
      "State": "Delhi"
    },
    {
      "S.No": 136,
      "Name of City": "Dadra & Nagar Haveli",
      "State": "Dadra & Nagar Haveli"
    },
    {
      "S.No": 137,
      "Name of City": "Goa",
      "State": "Goa"
    },
    {
      "S.No": 138,
      "Name of City": "Ahmedabad",
      "State": "Gujarat"
    },
    {
      "S.No": 139,
      "Name of City": "Amreli",
      "State": "Gujarat"
    },
    {
      "S.No": 140,
      "Name of City": "Anand",
      "State": "Gujarat"
    },
    {
      "S.No": 141,
      "Name of City": "Banaskantha",
      "State": "Gujarat"
    },
    {
      "S.No": 142,
      "Name of City": "Bharuch",
      "State": "Gujarat"
    },
    {
      "S.No": 143,
      "Name of City": "Bhavnagar",
      "State": "Gujarat"
    },
    {
      "S.No": 144,
      "Name of City": "Dahod",
      "State": "Gujarat"
    },
    {
      "S.No": 145,
      "Name of City": "Dang",
      "State": "Gujarat"
    },
    {
      "S.No": 146,
      "Name of City": "Gandhinagar",
      "State": "Gujarat"
    },
    {
      "S.No": 147,
      "Name of City": "Godhara",
      "State": "Gujarat"
    },
    {
      "S.No": 148,
      "Name of City": "Jamnagar",
      "State": "Gujarat"
    },
    {
      "S.No": 149,
      "Name of City": "Junagadh",
      "State": "Gujarat"
    },
    {
      "S.No": 150,
      "Name of City": "Kheda",
      "State": "Gujarat"
    },
    {
      "S.No": 151,
      "Name of City": "Kutch",
      "State": "Gujarat"
    },
    {
      "S.No": 152,
      "Name of City": "Mahesana",
      "State": "Gujarat"
    },
    {
      "S.No": 153,
      "Name of City": "Narmada",
      "State": "Gujarat"
    },
    {
      "S.No": 154,
      "Name of City": "Navsari",
      "State": "Gujarat"
    },
    {
      "S.No": 155,
      "Name of City": "Patan",
      "State": "Gujarat"
    },
    {
      "S.No": 156,
      "Name of City": "Porbandar",
      "State": "Gujarat"
    },
    {
      "S.No": 157,
      "Name of City": "Rajkot",
      "State": "Gujarat"
    },
    {
      "S.No": 158,
      "Name of City": "Sabarkantha",
      "State": "Gujarat"
    },
    {
      "S.No": 159,
      "Name of City": "Surat",
      "State": "Gujarat"
    },
    {
      "S.No": 160,
      "Name of City": "Surendranagar",
      "State": "Gujarat"
    },
    {
      "S.No": 161,
      "Name of City": "Vadodara",
      "State": "Gujarat"
    },
    {
      "S.No": 162,
      "Name of City": "Valsad",
      "State": "Gujarat"
    },
    {
      "S.No": 163,
      "Name of City": "Tapi",
      "State": "Gujarat"
    },
    {
      "S.No": 164,
      "Name of City": "Bilaspur (HP)",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 165,
      "Name of City": "Chamba",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 166,
      "Name of City": "Hamirpur (HP)",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 167,
      "Name of City": "Kangra",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 168,
      "Name of City": "Kullu",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 169,
      "Name of City": "Mandi",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 170,
      "Name of City": "Shimla",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 171,
      "Name of City": "Sirmaur",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 172,
      "Name of City": "Solan",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 173,
      "Name of City": "Una",
      "State": "Himachal Pradesh"
    },
    {
      "S.No": 174,
      "Name of City": "Ambala",
      "State": "Haryana"
    },
    {
      "S.No": 175,
      "Name of City": "Bhiwani",
      "State": "Haryana"
    },
    {
      "S.No": 176,
      "Name of City": "Faridabad",
      "State": "Haryana"
    },
    {
      "S.No": 177,
      "Name of City": "Fatehabad",
      "State": "Haryana"
    },
    {
      "S.No": 178,
      "Name of City": "Gurgaon",
      "State": "Haryana"
    },
    {
      "S.No": 179,
      "Name of City": "Hisar",
      "State": "Haryana"
    },
    {
      "S.No": 180,
      "Name of City": "Jhajjar",
      "State": "Haryana"
         },
    {
      "S.No": 181,
      "Name of City": "Jind",
      "State": "Haryana"
    },
    {
      "S.No": 182,
      "Name of City": "Kaithal",
      "State": "Haryana"
    },
    {
      "S.No": 183,
      "Name of City": "Karnal",
      "State": "Haryana"
    },
    {
      "S.No": 184,
      "Name of City": "Kurukshetra",
      "State": "Haryana"
    },
    {
      "S.No": 185,
      "Name of City": "Mewat",
      "State": "Haryana"
    },
    {
      "S.No": 186,
      "Name of City": "Narnaul",
      "State": "Haryana"
    },{
      "S.No": 188,
      "Name of City": "Panchkula",
      "State": "Haryana"
    },
    {
      "S.No": 189,
      "Name of City": "Panipat",
      "State": "Haryana"
    },
    {
      "S.No": 190,
      "Name of City": "Rewari",
      "State": "Haryana"
    },
    {
      "S.No": 191,
      "Name of City": "Rohtak",
      "State": "Haryana"
    },
    {
      "S.No": 192,
      "Name of City": "Sirsa",
      "State": "Haryana"
    },
    {
      "S.No": 193,
      "Name of City": "Sonipat",
      "State": "Haryana"
    },
    {
      "S.No": 194,
      "Name of City": "Yamunanagar",
      "State": "Haryana"
    },
    {
      "S.No": 195,
      "Name of City": "Bokaro",
      "State": "Jharkhand"
    },
    {
      "S.No": 196,
      "Name of City": "Chatra",
      "State": "Jharkhand"
    },
    {
      "S.No": 197,
      "Name of City": "Deogarh",
      "State": "Jharkhand"
    },
    {
      "S.No": 198,
      "Name of City": "Dhanbad",
      "State": "Jharkhand"
    },
    {
      "S.No": 199,
      "Name of City": "Dumka",
      "State": "Jharkhand"
    },
    {
      "S.No": 200,
      "Name of City": "East Singhbhum",
      "State": "Jharkhand"
    },
    {
      "S.No": 201,
      "Name of City": "Garhwa",
      "State": "Jharkhand"
    },
    {
      "S.No": 202,
      "Name of City": "Giridih",
      "State": "Jharkhand"
    },
    {
      "S.No": 203,
      "Name of City": "Godda",
      "State": "Jharkhand"
    },
    {
      "S.No": 204,
      "Name of City": "Gumla",
      "State": "Jharkhand"
    },
    {
      "S.No": 205,
      "Name of City": "Hazaribagh",
      "State": "Jharkhand"
    },
    {
      "S.No": 206,
      "Name of City": "Jamtara",
      "State": "Jharkhand"
    },
    {
      "S.No": 207,
      "Name of City": "Kodarma",
      "State": "Jharkhand"
    },
    {
      "S.No": 208,
      "Name of City": "Lathehar",
      "State": "Jharkhand"
    },
    {
      "S.No": 209,
      "Name of City": "Lohardaga",
      "State": "Jharkhand"
    },
    {
      "S.No": 210,
      "Name of City": "Pakur",
      "State": "Jharkhand"
    },
    {
      "S.No": 211,
      "Name of City": "Palamu",
      "State": "Jharkhand"
    },
    {
      "S.No": 212,
      "Name of City": "Ranchi",
      "State": "Jharkhand"
    },
    {
      "S.No": 213,
      "Name of City": "Sahibganj",
      "State": "Jharkhand"
    },
    {
      "S.No": 214,
      "Name of City": "Saraikela-Kharsawan",
      "State": "Jharkhand"
    },
    {
      "S.No": 215,
      "Name of City": "Simdega",
      "State": "Jharkhand"
    },
    {
      "S.No": 216,
      "Name of City": "West Singhbhum",
      "State": "Jharkhand"
    },
    {
      "S.No": 217,
      "Name of City": "Baramula",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 218,
      "Name of City": "Doda",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 219,
      "Name of City": "Jammu",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 220,
      "Name of City": "Kathua",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 221,
      "Name of City": "Kishtwar",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 222,
      "Name of City": "Poonch",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 223,
      "Name of City": "Rajouri",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 224,
      "Name of City": "Ramban",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 225,
      "Name of City": "Reasi",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 226,
      "Name of City": "Sambha",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 227,
      "Name of City": "Udhampur",
      "State": "Jammu & Kashmir"
    },
    {
      "S.No": 228,
      "Name of City": "Bagalkot",
      "State": "Karnataka"
    },
    {
      "S.No": 229,
      "Name of City": "Bangalore Rural",
      "State": "Karnataka"
    },
    {
      "S.No": 230,
      "Name of City": "Bangalore Urban",
      "State": "Karnataka"
    },
    {
      "S.No": 231,
      "Name of City": "Belgaum",
      "State": "Karnataka"
    },
    {
      "S.No": 232,
      "Name of City": "Bellary",
      "State": "Karnataka"
    },
    {
      "S.No": 233,
      "Name of City": "Bidar",
      "State": "Karnataka"
    },
    {
      "S.No": 234,
      "Name of City": "Bijapur",
      "State": "Karnataka"
    },
    {
      "S.No": 235,
      "Name of City": "Chamarajanagar",
      "State": "Karnataka"
    },
    {
      "S.No": 236,
      "Name of City": "Chikkaballapur",
      "State": "Karnataka"
    },
    {
      "S.No": 237,
      "Name of City": "Chikmagalur",
      "State": "Karnataka"
    },
    {
      "S.No": 238,
      "Name of City": "Chitradurga",
      "State": "Karnataka"
    },
    {
      "S.No": 239,
      "Name of City": "Dakshina Kannada",
      "State": "Karnataka"
    },
    {
      "S.No": 240,
      "Name of City": "Davanagere",
      "State": "Karnataka"
    },
    {
      "S.No": 241,
      "Name of City": "Dharwad",
      "State": "Karnataka"
    },
    {
      "S.No": 242,
      "Name of City": "Gadag",
      "State": "Karnataka"
    },
    {
      "S.No": 243,
      "Name of City": "Gulbarga",
      "State": "Karnataka"
    },
    {
      "S.No": 244,
      "Name of City": "Hassan",
      "State": "Karnataka"
    },
    {
      "S.No": 245,
      "Name of City": "Haveri",
      "State": "Karnataka"
    },
    {
      "S.No": 246,
      "Name of City": "Kodagu",
      "State": "Karnataka"
    },
    {
      "S.No": 247,
      "Name of City": "Kolar",
      "State": "Karnataka"
    },
    {
      "S.No": 248,
      "Name of City": "Koppal",
      "State": "Karnataka"
    },
    {
      "S.No": 249,
      "Name of City": "Mandya",
      "State": "Karnataka"
    },
    {
      "S.No": 250,
      "Name of City": "Mysore",
      "State": "Karnataka"
    },
      {
      "S.No": 251,
      "Name of City": "Raichur",
      "State": "Karnataka"
    },
    {
      "S.No": 252,
      "Name of City": "Ramanagara",
      "State": "Karnataka"
    },
    {
      "S.No": 253,
      "Name of City": "Shimoga",
      "State": "Karnataka"
    },
    {
      "S.No": 254,
      "Name of City": "Tumkur",
      "State": "Karnataka"
    },
    {
      "S.No": 255,
      "Name of City": "Udupi",
      "State": "Karnataka"
    },
    {
      "S.No": 256,
      "Name of City": "Uttara Kannada",
      "State": "Karnataka"
    },
    {
      "S.No": 257,
      "Name of City": "Alappuzha",
      "State": "Kerala"
    },
    {
      "S.No": 258,
      "Name of City": "Ernakulam",
      "State": "Kerala"
    },
    {
      "S.No": 259,
      "Name of City": "Idukki",
      "State": "Kerala"
    },
    {
      "S.No": 260,
      "Name of City": "Kannur",
      "State": "Kerala"
    },
    {
      "S.No": 261,
      "Name of City": "Kasaragod",
      "State": "Kerala"
    },
    {
      "S.No": 262,
      "Name of City": "Kollam",
      "State": "Kerala"
    },
    {
      "S.No": 263,
      "Name of City": "Kottayam",
      "State": "Kerala"
    },
    {
      "S.No": 264,
      "Name of City": "Kozhikode",
      "State": "Kerala"
    },
    {
      "S.No": 265,
      "Name of City": "Malappuram",
      "State": "Kerala"
    },
    {
      "S.No": 266,
      "Name of City": "Palakkad",
      "State": "Kerala"
    },
    {
      "S.No": 267,
      "Name of City": "Pathanamthitta",
      "State": "Kerala"
    },
    {
      "S.No": 268,
      "Name of City": "Thiruvananthapuram",
      "State": "Kerala"
    },
    {
      "S.No": 269,
      "Name of City": "Thrissur",
      "State": "Kerala"
    },
    {
      "S.No": 270,
      "Name of City": "Wayanad",
      "State": "Kerala"
    },
    {
      "S.No": 271,
      "Name of City": "Lakshadweep",
      "State": "Lakshadweep"
    },
    {
      "S.No": 272,
      "Name of City": "Bhoi",
      "State": "Meghalaya"
    },
    {
      "S.No": 273,
      "Name of City": "East Garo Hills",
      "State": "Meghalaya"
    },
     {
      "S.No": 274,
      "Name of City": "East Khasi Hills",
      "State": "Meghalaya"
    },
    {
      "S.No": 275,
      "Name of City": "Jaintia Hills",
      "State": "Meghalaya"
    },
    {
      "S.No": 276,
      "Name of City": "South Garo Hills",
      "State": "Meghalaya"
    },
    {
      "S.No": 277,
      "Name of City": "West Garo Hills",
      "State": "Meghalaya"
    },
    {
      "S.No": 278,
      "Name of City": "West Khasi Hills",
      "State": "Meghalaya"
    },
    {
      "S.No": 279,
      "Name of City": "Ahmednagar",
      "State": "Maharashtra"
    },
    {
      "S.No": 280,
      "Name of City": "Akola",
      "State": "Maharashtra"
    },
    {
      "S.No": 281,
      "Name of City": "Amaravati",
      "State": "Maharashtra"
    },
    {
      "S.No": 282,
      "Name of City": "Aurangabad",
      "State": "Maharashtra"
    },
    {
      "S.No": 283,
      "Name of City": "Beed",
      "State": "Maharashtra"
    },
    {
      "S.No": 284,
      "Name of City": "Bhandara",
      "State": "Maharashtra"
    },
    {
      "S.No": 285,
      "Name of City": "Buldhana",
      "State": "Maharashtra"
    },
    {
      "S.No": 286,
      "Name of City": "Chandrapur",
      "State": "Maharashtra"
    },
    {
      "S.No": 287,
      "Name of City": "Dhule",
      "State": "Maharashtra"
    },
    {
      "S.No": 288,
      "Name of City": "Gadchiroli",
      "State": "Maharashtra"
    },
    {
      "S.No": 289,
      "Name of City": "Gondia",
      "State": "Maharashtra"
    },
    {
      "S.No": 290,
      "Name of City": "Hingoli",
      "State": "Maharashtra"
    },
    {
      "S.No": 291,
      "Name of City": "Jalgaon",
      "State": "Maharashtra"
    },
    {
      "S.No": 292,
      "Name of City": "Jalna",
      "State": "Maharashtra"
    },
    {
      "S.No": 293,
      "Name of City": "Kolhapur",
      "State": "Maharashtra"
    },
    {
      "S.No": 294,
      "Name of City": "Latur",
      "State": "Maharashtra"
    },
    {
      "S.No": 295,
      "Name of City": "Nagpur",
      "State": "Maharashtra"
    },
    {
      "S.No": 296,
      "Name of City": "Nanded",
      "State": "Maharashtra"
    },
    {
      "S.No": 297,
      "Name of City": "Nandurbar",
      "State": "Maharashtra"
    },
    {
      "S.No": 298,
      "Name of City": "Nasik",
      "State": "Maharashtra"
    },
    {
      "S.No": 299,
      "Name of City": "Osmanabad",
      "State": "Maharashtra"
    },
    {
      "S.No": 300,
      "Name of City": "Parbhani",
      "State": "Maharashtra"
    },
    {
      "S.No": 301,
      "Name of City": "Pune",
      "State": "Maharashtra"
    },
    {
      "S.No": 302,
      "Name of City": "Raigad",
      "State": "Maharashtra"
    },
    {
      "S.No": 303,
      "Name of City": "Ratnagiri",
      "State": "Maharashtra"
    },
    {
      "S.No": 304,
      "Name of City": "Sangli",
      "State": "Maharashtra"
    },
    {
      "S.No": 305,
      "Name of City": "Satara",
      "State": "Maharashtra"
    },
    {
      "S.No": 306,
      "Name of City": "Sindhudurg",
      "State": "Maharashtra"
    },
    {
      "S.No": 307,
      "Name of City": "Solapur",
      "State": "Maharashtra"
    },
    {
      "S.No": 308,
      "Name of City": "Thane",
      "State": "Maharashtra"
    },
    {
      "S.No": 309,
      "Name of City": "Wardha",
      "State": "Maharashtra"
    },
    {
      "S.No": 310,
      "Name of City": "Washim",
      "State": "Maharashtra"
    },
    {
      "S.No": 311,
      "Name of City": "Yavatmal",
      "State": "Maharashtra"
    },
    {
      "S.No": 312,
      "Name of City": "Bishnupur",
      "State": "Manipur"
    },
    {
      "S.No": 313,
      "Name of City": "Chandel",
      "State": "Manipur"
    },
    {
      "S.No": 314,
      "Name of City": "Churachandpur",
      "State": "Manipur"
    },
    {
      "S.No": 315,
      "Name of City": "Imphal East",
      "State": "Manipur"
    },
    {
      "S.No": 316,
      "Name of City": "Imphal West",
      "State": "Manipur"
    },
    {
      "S.No": 317,
      "Name of City": "Kangpokpi",
      "State": "Manipur"
    },
    {
      "S.No": 318,
      "Name of City": "Senapati",
      "State": "Manipur"
    },
    {
      "S.No": 319,
      "Name of City": "Tamenglong",
      "State": "Manipur"
    },
    {
      "S.No": 320,
      "Name of City": "Thoubal",
      "State": "Manipur"
    },
    {
      "S.No": 321,
      "Name of City": "Ukhrul",
      "State": "Manipur"
    },
    {
      "S.No": 322,
      "Name of City": "Anupur",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 323,
      "Name of City": "Ashok Nagar",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 324,
      "Name of City": "Balaghat",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 325,
      "Name of City": "Barwani",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 326,
      "Name of City": "Betul",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 327,
      "Name of City": "Bhind",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 328,
      "Name of City": "Bhopal",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 329,
      "Name of City": "Burhanpur",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 330,
      "Name of City": "Chhatarpur",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 331,
      "Name of City": "Chhindwara",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 332,
      "Name of City": "Damoh",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 333,
      "Name of City": "Datia",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 334,
      "Name of City": "Dewas",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 335,
      "Name of City": "Dhar",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 336,
      "Name of City": "Dindori",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 337,
      "Name of City": "Guna",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 338,
      "Name of City": "Gwalior",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 339,
      "Name of City": "Harda",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 340,
      "Name of City": "Hoshangabad",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 341,
      "Name of City": "Indore",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 342,
      "Name of City": "Jabalpur",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 343,
      "Name of City": "Jhabua",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 344,
      "Name of City": "Katni",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 345,
      "Name of City": "Khandwa",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 346,
      "Name of City": "Khargone",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 347,
      "Name of City": "Mandla",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 348,
      "Name of City": "Mandsaur",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 349,
      "Name of City": "Morena",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 350,
      "Name of City": "Narsinghpur",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 351,
      "Name of City": "Neemuch",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 352,
      "Name of City": "Panna",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 353,
      "Name of City": "Raisen",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 354,
      "Name of City": "Rajgarh",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 355,
      "Name of City": "Ratlam",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 356,
      "Name of City": "Rewa",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 357,
      "Name of City": "Sagar",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 358,
      "Name of City": "Satna",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 359,
      "Name of City": "Seoni",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 360,
      "Name of City": "Shahdol",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 361,
      "Name of City": "Shajapur",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 362,
      "Name of City": "Sheopur",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 363,
      "Name of City": "Shivpuri",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 364,
      "Name of City": "Sidhi",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 365,
      "Name of City": "Tikamgarh",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 366,
      "Name of City": "Ujjain",
      "State": "Madhya Pradesh"
         },
        {
      "S.No": 367,
      "Name of City": "Umaria",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 368,
      "Name of City": "Vidisha",
      "State": "Madhya Pradesh"
    },
    {
      "S.No": 369,
      "Name of City": "Aizawal West",
      "State": "Mizoram"
    },
    {
      "S.No": 370,
      "Name of City": "Aizawl East",
      "State": "Mizoram"
    },
    {
      "S.No": 371,
      "Name of City": "Champhai",
      "State": "Mizoram"
    },
    {
      "S.No": 372,
      "Name of City": "Kolasib",
      "State": "Mizoram"
    },
    {
      "S.No": 373,
      "Name of City": "Lawngtlai",
      "State": "Mizoram"
    },
    {
      "S.No": 374,
      "Name of City": "Lunglei",
      "State": "Mizoram"
    },
    {
      "S.No": 375,
      "Name of City": "Mamit",
      "State": "Mizoram"
    },
    {
      "S.No": 376,
      "Name of City": "Saiha",
      "State": "Mizoram"
    },
    {
      "S.No": 377,
      "Name of City": "Serchhip",
      "State": "Mizoram"
    },
    {
      "S.No": 378,
      "Name of City": "Dimapur",
      "State": "Nagaland"
    },
    {
      "S.No": 379,
      "Name of City": "Kiphire",
      "State": "Nagaland"
    },
    {
      "S.No": 380,
      "Name of City": "Kohima",
      "State": "Nagaland"
    },
    {
      "S.No": 381,
      "Name of City": "Longleng",
      "State": "Nagaland"
    },
    {
      "S.No": 382,
      "Name of City": "Mokokchung",
      "State": "Nagaland"
    },
    {
      "S.No": 383,
      "Name of City": "Mon",
      "State": "Nagaland"
    },
    {
      "S.No": 384,
      "Name of City": "Peren",
      "State": "Nagaland"
    },
    {
      "S.No": 385,
      "Name of City": "Phek",
      "State": "Nagaland"
    },
    {
      "S.No": 386,
      "Name of City": "Tuensang",
      "State": "Nagaland"
    },
    {
      "S.No": 387,
      "Name of City": "Wokha",
      "State": "Nagaland"
    },
    {
      "S.No": 388,
      "Name of City": "Zunheboto",
      "State": "Nagaland"
    },
    {
      "S.No": 389,
      "Name of City": "Angul",
      "State": "Odisha"
    },
    {
      "S.No": 390,
      "Name of City": "Balangir",
      "State": "Odisha"
    },
    {
      "S.No": 391,
      "Name of City": "Baleshwar",
      "State": "Odisha"
    },
    {
      "S.No": 392,
      "Name of City": "Bargarh",
      "State": "Odisha"
    },
    {
      "S.No": 393,
      "Name of City": "Baudh",
      "State": "Odisha"
    },
    {
      "S.No": 394,
      "Name of City": "Bhadrak",
      "State": "Odisha"
    },
    {
      "S.No": 395,
      "Name of City": "Cuttack",
      "State": "Odisha"
    },
    {
      "S.No": 396,
      "Name of City": "Debagarh",
      "State": "Odisha"
    },
    {
      "S.No": 397,
      "Name of City": "Dhenkanal",
      "State": "Odisha"
    },
    {
      "S.No": 398,
      "Name of City": "Gajapati",
      "State": "Odisha"
    },
    {
      "S.No": 399,
      "Name of City": "Ganjam",
      "State": "Odisha"
    },
    {
      "S.No": 400,
      "Name of City": "Jagatsinghapur",
      "State": "Odisha"
    },
    {
      "S.No": 401,
      "Name of City": "Jajpur",
      "State": "Odisha"
    },
    {
      "S.No": 402,
      "Name of City": "Jharsuguda",
      "State": "Odisha"
    },
    {
      "S.No": 403,
      "Name of City": "Kalahandi",
      "State": "Odisha"
    },
    {
      "S.No": 404,
      "Name of City": "Kandhamal",
      "State": "Odisha"
    },
    {
      "S.No": 405,
      "Name of City": "Kendrapara",
      "State": "Odisha"
    },
    {
      "S.No": 406,
      "Name of City": "Keonjhar",
      "State": "Odisha"
    },
    {
      "S.No": 407,
      "Name of City": "Khurda",
      "State": "Odisha"
    },
    {
      "S.No": 408,
      "Name of City": "Koraput",
      "State": "Odisha"
    },
    {
      "S.No": 409,
      "Name of City": "Malkangiri",
      "State": "Odisha"
    },
    {
      "S.No": 410,
      "Name of City": "Mayurbhanj",
      "State": "Odisha"
    },
    {
      "S.No": 411,
      "Name of City": "Nabarangapur",
      "State": "Odisha"
    },
    {
      "S.No": 412,
      "Name of City": "Nayagarh",
      "State": "Odisha"
    },
    {
      "S.No": 413,
      "Name of City": "Nuapada",
      "State": "Odisha"
    },
    {
      "S.No": 414,
      "Name of City": "Puri",
      "State": "Odisha"
    },
    {
      "S.No": 415,
      "Name of City": "Rayagada",
      "State": "Odisha"
    },
    {
      "S.No": 416,
      "Name of City": "Sambalpur",
      "State": "Odisha"
    },
    {
      "S.No": 417,
      "Name of City": "Sonapur / Subarnapur",
      "State": "Odisha"
    },
    {
      "S.No": 418,
      "Name of City": "Sundargarh",
      "State": "Odisha"
    },
    {
      "S.No": 419,
      "Name of City": "Pondicherry",
      "State": "Puducherry"
    },
    {
      "S.No": 420,
      "Name of City": "Amritsar",
      "State": "Punjab"
    },
    {
      "S.No": 421,
      "Name of City": "Bathinda",
      "State": "Punjab"
    },
    {
      "S.No": 422,
      "Name of City": "Barnala",
      "State": "Punjab"
    },
    {
      "S.No": 423,
      "Name of City": "Faridkot",
      "State": "Punjab"
    },
    {
      "S.No": 424,
      "Name of City": "Fatehgarh Sahib",
      "State": "Punjab"
    },
    {
      "S.No": 425,
      "Name of City": "Firozpur",
      "State": "Punjab"
    },
    {
      "S.No": 426,
      "Name of City": "Gurdaspur",
      "State": "Punjab"
    },
    {
      "S.No": 427,
      "Name of City": "Hoshiarpur",
      "State": "Punjab"
    },
    {
      "S.No": 428,
      "Name of City": "Jalandhar",
      "State": "Punjab"
    },
    {
      "S.No": 429,
      "Name of City": "Kapurthala",
      "State": "Punjab"
    },
    {
      "S.No": 430,
      "Name of City": "Ludhiana",
      "State": "Punjab"
    },
    {
      "S.No": 431,
      "Name of City": "Mansa",
      "State": "Punjab"
    },
    {
      "S.No": 432,
      "Name of City": "Moga",
      "State": "Punjab"
    },
    {
      "S.No": 433,
      "Name of City": "Mohali / SAS Nagar",
      "State": "Punjab"
    },
    {
      "S.No": 434,
      "Name of City": "Mukatsar",
      "State": "Punjab"
    },
    {
      "S.No": 435,
      "Name of City": "Nawanshahr",
      "State": "Punjab"
    },
    {
      "S.No": 436,
      "Name of City": "Patiala",
      "State": "Punjab"
    },
    {
      "S.No": 437,
      "Name of City": "Rupnagar / Ropar",
      "State": "Punjab"
    },
    {
      "S.No": 438,
      "Name of City": "Sangrur",
      "State": "Punjab"
    },
    {
      "S.No": 439,
      "Name of City": "Tarn Taran",
      "State": "Punjab"
    },
    {
      "S.No": 440,
      "Name of City": "Ajmer",
      "State": "Rajasthan"
    },
    {
      "S.No": 441,
      "Name of City": "Alwar",
      "State": "Rajasthan"
    },
    {
      "S.No": 442,
      "Name of City": "Banswara",
      "State": "Rajasthan"
    },
    {
      "S.No": 443,
      "Name of City": "Baran",
      "State": "Rajasthan"
    },
    {
      "S.No": 444,
      "Name of City": "Barmer",
      "State": "Rajasthan"
    },
    {
      "S.No": 445,
      "Name of City": "Bharatpur",
      "State": "Rajasthan"
    },
    {
      "S.No": 446,
      "Name of City": "Bhilwara",
      "State": "Rajasthan"
    },
    {
      "S.No": 447,
      "Name of City": "Bikaner",
      "State": "Rajasthan"
    },
    {
      "S.No": 448,
      "Name of City": "Bundi",
      "State": "Rajasthan"
    },
    {
      "S.No": 449,
      "Name of City": "Chittaurgarh",
      "State": "Rajasthan"
    },
    {
      "S.No": 450,
      "Name of City": "Churu",
      "State": "Rajasthan"
    },
    {
      "S.No": 451,
      "Name of City": "Dausa",
      "State": "Rajasthan"
    },
    {
      "S.No": 452,
      "Name of City": "Dhaulpur",
      "State": "Rajasthan"
    },
    {
      "S.No": 453,
      "Name of City": "Dungarpur",
      "State": "Rajasthan"
    },
    {
      "S.No": 454,
      "Name of City": "Ganganagar",
      "State": "Rajasthan"
    },
    {
      "S.No": 455,
      "Name of City": "Hanumangarh",
      "State": "Rajasthan"
    },
    {
      "S.No": 456,
      "Name of City": "Jaipur",
      "State": "Rajasthan"
    },
    {
      "S.No": 457,
      "Name of City": "Jaisalmer",
      "State": "Rajasthan"
    },
    {
      "S.No": 458,
      "Name of City": "Jalore",
      "State": "Rajasthan"
    },
    {
      "S.No": 459,
      "Name of City": "Jhalawar",
      "State": "Rajasthan"
    },
    {
      "S.No": 460,
      "Name of City": "Jhunjhunun",
      "State": "Rajasthan"
         },
     {
      "S.No": 461,
      "Name of City": "Jodhpur",
      "State": "Rajasthan"
    },
    {
      "S.No": 462,
      "Name of City": "Karauli",
      "State": "Rajasthan"
    },
    {
      "S.No": 463,
      "Name of City": "Kota",
      "State": "Rajasthan"
    },
    {
      "S.No": 464,
      "Name of City": "Nagaur",
      "State": "Rajasthan"
    },
    {
      "S.No": 465,
      "Name of City": "Pali",
      "State": "Rajasthan"
    },
    {
      "S.No": 466,
      "Name of City": "Pratapgarh",
      "State": "Rajasthan"
    },
    {
      "S.No": 467,
      "Name of City": "Rajsamand",
      "State": "Rajasthan"
    },
    {
      "S.No": 468,
      "Name of City": "Sawai Madhopur",
      "State": "Rajasthan"
    },
    {
      "S.No": 469,
      "Name of City": "Sikar",
      "State": "Rajasthan"
    },
    {
      "S.No": 470,
      "Name of City": "Sirohi",
      "State": "Rajasthan"
    },
    {
      "S.No": 471,
      "Name of City": "Tonk",
      "State": "Rajasthan"
    },
    {
      "S.No": 472,
      "Name of City": "Udaipur",
      "State": "Rajasthan"
    },
    {
      "S.No": 473,
      "Name of City": "East",
      "State": "Sikkim"
    },
    {
      "S.No": 474,
      "Name of City": "North",
      "State": "Sikkim"
    },
    {
      "S.No": 475,
      "Name of City": "South",
      "State": "Sikkim"
    },
    {
      "S.No": 476,
      "Name of City": "West",
      "State": "Sikkim"
    },
    {
      "S.No": 477,
      "Name of City": "Kancheepuram",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 478,
      "Name of City": "Saidapet",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 479,
      "Name of City": "Thiruvallur",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 480,
      "Name of City": "Poonamallee",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 481,
      "Name of City": "Vellore",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 482,
      "Name of City": "Thiruppattur",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 483,
      "Name of City": "Tiruvannamalai",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 484,
      "Name of City": "Cheyyar",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 485,
      "Name of City": "Cuddalore",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 486,
      "Name of City": "Villupuram",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 487,
      "Name of City": "Kallakurichi",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 488,
      "Name of City": "Thanjavur",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 489,
      "Name of City": "Thiruvarur",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 490,
      "Name of City": "Nagapattinam",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 491,
      "Name of City": "Thiruchirapalli",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 492,
      "Name of City": "Karur",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 493,
      "Name of City": "Perambalur",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 494,
      "Name of City": "Pudukottai",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 495,
      "Name of City": "Aranthangi",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 496,
      "Name of City": "Madurai",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 497,
      "Name of City": "Theni",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 498,
      "Name of City": "Dindigul",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 499,
      "Name of City": "Palani",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 500,
      "Name of City": "Ramanathapuram",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 501,
      "Name of City": "Paramakudi",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 502,
      "Name of City": "Sivaganga",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 503,
      "Name of City": "Virudhunagar",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 504,
      "Name of City": "Sivakasi",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 505,
      "Name of City": "Thirunelveli",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 506,
      "Name of City": "Sankarankoil",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 507,
      "Name of City": "Thoothukudi",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 508,
      "Name of City": "Kovilpatti",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 509,
      "Name of City": "Nagercoil",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 510,
      "Name of City": "Salem",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 511,
      "Name of City": "Namakkal",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 512,
      "Name of City": "Dharmapuri",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 513,
      "Name of City": "Krishnagiri",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 514,
      "Name of City": "Coimbatore",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 515,
      "Name of City": "Thiruppur",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 516,
      "Name of City": "Erode",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 517,
      "Name of City": "Dharapuram",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 518,
      "Name of City": "The Nilgiris",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 519,
      "Name of City": "Chennai Corp",
      "State": "Tamil Nadu"
    },
    {
      "S.No": 520,
      "Name of City": "East / Dhalai Tripura",
      "State": "Tripura"
    },
    {
      "S.No": 521,
      "Name of City": "North Tripura",
      "State": "Tripura"
    },
    {
      "S.No": 522,
      "Name of City": "South Tripura",
      "State": "Tripura"
    },
    {
      "S.No": 523,
      "Name of City": "West Tripura",
      "State": "Tripura"
    },
    {
      "S.No": 524,
      "Name of City": "Agra",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 525,
      "Name of City": "Aligarh",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 526,
      "Name of City": "Allahabad",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 527,
      "Name of City": "Ambedkar Nagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 528,
      "Name of City": "Auraiya",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 529,
      "Name of City": "Azamgarh",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 530,
      "Name of City": "Baghpat",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 531,
      "Name of City": "Bahraich",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 532,
      "Name of City": "Ballia",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 533,
      "Name of City": "Balrampur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 534,
      "Name of City": "Banda",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 535,
      "Name of City": "Barabanki",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 536,
      "Name of City": "Bareilly",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 537,
      "Name of City": "Basti",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 538,
      "Name of City": "Bijnor",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 539,
      "Name of City": "Budaun",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 540,
      "Name of City": "Bulandshahar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 541,
      "Name of City": "Chandauli",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 542,
      "Name of City": "Chitrakoot",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 543,
      "Name of City": "Deoria",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 544,
      "Name of City": "Etah",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 545,
      "Name of City": "Etawah",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 546,
      "Name of City": "Faizabad",
      "State": "Uttar Pradesh"
    },
        
    {
      "S.No": 546,
      "Name of City": "Faizabad",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 547,
      "Name of City": "Farrukhabad",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 548,
      "Name of City": "Fatehpur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 549,
      "Name of City": "Firozabad",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 550,
      "Name of City": "Gautam Budh Nagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 551,
      "Name of City": "Ghaziabad",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 552,
      "Name of City": "Ghazipur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 553,
      "Name of City": "Gonda",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 554,
      "Name of City": "Gorakhpur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 555,
      "Name of City": "Hamirpur-UP",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 556,
      "Name of City": "Hardoi",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 557,
      "Name of City": "Hathras/Mahamayanagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 558,
      "Name of City": "Jalaun",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 559,
      "Name of City": "Jaunpur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 560,
      "Name of City": "Jhansi",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 561,
      "Name of City": "Jyotiba Phule Nagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 562,
      "Name of City": "Kannauj",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 563,
      "Name of City": "Kanpur Nagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 564,
      "Name of City": "Kanpur Dehat",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 565,
      "Name of City": "Kaushambi",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 566,
      "Name of City": "Kheri",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 567,
      "Name of City": "Kushinagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 568,
      "Name of City": "Lalitpur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 569,
      "Name of City": "Lucknow",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 570,
      "Name of City": "Maharajganj",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 571,
      "Name of City": "Mahoba",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 572,
      "Name of City": "Mainpuri",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 573,
      "Name of City": "Mathura",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 574,
      "Name of City": "Mau",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 575,
      "Name of City": "Meerut",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 576,
      "Name of City": "Mirzapur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 577,
      "Name of City": "Moradabad",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 578,
      "Name of City": "Muzaffarnagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 579,
      "Name of City": "Pilibhit",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 580,
      "Name of City": "Pratapgarh",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 581,
      "Name of City": "Raebareli",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 582,
      "Name of City": "Rampur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 583,
      "Name of City": "Saharanpur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 584,
      "Name of City": "Sant Kabir Nagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 585,
      "Name of City": "Sant Ravidas Nagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 586,
      "Name of City": "Shahjahanpur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 587,
      "Name of City": "Shravasti",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 588,
      "Name of City": "Siddharthnagar",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 589,
      "Name of City": "Sitapur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 590,
      "Name of City": "Sonbhadra",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 591,
      "Name of City": "Sultanpur",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 592,
      "Name of City": "Unnao",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 593,
      "Name of City": "Varanasi",
      "State": "Uttar Pradesh"
    },
    {
      "S.No": 594,
      "Name of City": "Almora",
      "State": "Uttarakhand"
    },
    {
      "S.No": 595,
      "Name of City": "Bageshwar",
      "State": "Uttarakhand"
    },
    {
      "S.No": 596,
      "Name of City": "Chamoli",
      "State": "Uttarakhand"
    },
    {
      "S.No": 597,
      "Name of City": "Champawat",
      "State": "Uttarakhand"
    },
    {
      "S.No": 598,
      "Name of City": "Dehradun",
      "State": "Uttarakhand"
    },
    {
      "S.No": 599,
      "Name of City": "Pauri Garhwal",
      "State": "Uttarakhand"
    },
    {
      "S.No": 600,
      "Name of City": "Haridwar",
      "State": "Uttarakhand"
    },
    {
      "S.No": 601,
      "Name of City": "Nainital",
      "State": "Uttarakhand"
    },
    {
      "S.No": 602,
      "Name of City": "Pithoragarh",
      "State": "Uttarakhand"
    },
    {
      "S.No": 603,
      "Name of City": "Rudraprayag",
      "State": "Uttarakhand"
    },
    {
      "S.No": 604,
      "Name of City": "Tehri Garhwal",
      "State": "Uttarakhand"
    },
    {
      "S.No": 605,
      "Name of City": "Udham Singh Nagar",
      "State": "Uttarakhand"
    },
    {
      "S.No": 606,
      "Name of City": "Uttarkashi",
      "State": "Uttarakhand"
    },
    {
      "S.No": 607,
      "Name of City": "Bankura",
      "State": "West Bengal"
    },
    {
      "S.No": 608,
      "Name of City": "Barddhaman",
      "State": "West Bengal"
    },
    {
      "S.No": 609,
      "Name of City": "Birbhum",
      "State": "West Bengal"
    },
    {
      "S.No": 610,
      "Name of City": "Cooch Behar",
      "State": "West Bengal"
    },
    {
      "S.No": 611,
      "Name of City": "Dakshin Dinajpur",
      "State": "West Bengal"
    },
    {
      "S.No": 612,
      "Name of City": "Darjiling",
      "State": "West Bengal"
    },
    {
      "S.No": 613,
      "Name of City": "East Medinipur",
      "State": "West Bengal"
    },
    {
      "S.No": 614,
      "Name of City": "Haora / Howrah",
      "State": "West Bengal"
    },
    {
      "S.No": 615,
      "Name of City": "Hugly",
      "State": "West Bengal"
    },
    {
      "S.No": 616,
      "Name of City": "Jalpaiguri",
      "State": "West Bengal"
    },
    {
      "S.No": 617,
      "Name of City": "Kolkata",
      "State": "West Bengal"
    },
    {
      "S.No": 618,
      "Name of City": "Maldah",
      "State": "West Bengal"
    },
    {
      "S.No": 619,
      "Name of City": "Murshidabad",
      "State": "West Bengal"
    },
    {
      "S.No": 620,
      "Name of City": "Nadia",
      "State": "West Bengal"
    },
    {
      "S.No": 621,
      "Name of City": "North 24 Parganas",
      "State": "West Bengal"
    },
    {
      "S.No": 622,
      "Name of City": "Puruliya",
      "State": "West Bengal"
    },
    {
      "S.No": 623,
      "Name of City": "South 24 Parganas",
      "State": "West Bengal"
    },
    {
      "S.No": 624,
      "Name of City": "Uttar Dinajpur",
      "State": "West Bengal"
    },
    {
      "S.No": 625,
      "Name of City": "West Mednapur",
      "State": "West Bengal"
    }    
            // Add more cities and states as needed
        ]
 };
    
    const [selectedState, setSelectedState] = useState('');
   
    const [selectedLocation, setSelectedLocation] = useState('');
    const [states, setStates] = useState<string[]>([]);
   
    const [locations, setLocations] = useState<string[]>([]);

    const citiesInSelectedState: string[] = citiesData["List Of Cities And Towns In Ind"]
  .filter(city => city.State === selectedState)
  .map(city => city["Name of City"]);

    useEffect(() => {
        if (citiesData && citiesData["List Of Cities And Towns In Ind"]) {
          const uniqueStatesSet = new Set(citiesData["List Of Cities And Towns In Ind"].map(city => city.State));
          const uniqueStatesArray: string[] = [];
          
          uniqueStatesSet.forEach(state => uniqueStatesArray.push(state));
      
          setStates(uniqueStatesArray);
        }
      }, [citiesData]);
      
      useEffect(() => {
        if (selectedState) {
          const citiesInSelectedState = citiesData["List Of Cities And Towns In Ind"]
            .filter(city => city.State === selectedState)
            .map(city => city["Name of City"]);
          
            setLocations(citiesInSelectedState);

        } else {
          setLocations([]);
        }
      }, [selectedState, citiesData]);
      
    /* ----------------------------- register submit function ---------------------------- */
  // ... (previous code)
   /* ----------------------------- register submit function ---------------------------- */
   const onSubmitHandler = async (data: any) => {
    if (CurrentPage === 1) {
        setCurrentPage(2);
    }
    
    if (CurrentPage === 2) {
        if (data.password !== data.confirm_password) {
            addToast('Password and Confirm Password does not match', {
                appearance: 'error',
                autoDismiss: true,
            });
        } else if (data.password === data.confirm_password) {
            try {
                await Axios({
                    method: 'post',
                    url: `/users/signup`,
                    data: {
                        fullName: {
                            firstName: data.first_name,
                            lastName: data.last_name,
                        },
                        email: data.email,
                        isConfirmed: false,
                        password: data.password,
                        role: {
                            isCandidate:
                                data.freelancer_role === 'candidate'
                                    ? true
                                    : false,
                            isEmployer:
                                data.freelancer_role === 'employer'
                                    ? true
                                    : false,
                            isAdmin:
                                data.freelancer_role === 'admin'
                                    ? true
                                    : false,
       state: data.state,
location: data.location,
phoneNumber: data.phoneNumber,
                        },
                
                         
                    },
                }).then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        addToast(res.data.message, {
                            appearance: 'success',
                            autoDismiss: true,
                        });
                        RegisterPopupHandler();
                        LoginPopupHandler();
                        setTimeout(() => {
                            setCurrentPage(1);
                            reset();
                        }, 3000);
                    }
                });

                
            } catch (error: any) {
                addToast(error.response.data.message, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
        }
    }
};
// ... (remaining code)


    /* ------------------------- previous page function ------------------------- */
    const previousHandler = () => {
        if (CurrentPage === 2) {
            setCurrentPage(1);
        }
    };

    const LoginHandler = async () => {
        await RegisterPopupHandler();
        await setTimeout(() => {
            LoginPopupHandler();
        }, 300);
    };

    return (
        // Popup Register Wrapper
        <section
            className={`fixed w-full h-full top-0 left-0 bg-[rgba(0,_0,_0,_0.7)] z-[9999] text-white transition-all duration-300 ease-in-out  ${
                RegisterPopup ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <div className="flex justify-center items-center w-full h-screen">
                {/* Register Form */}
                <div
                    className={`relative z-[2] max-w-[550px] w-full max-h-[650px] overflow-auto my-0 mx-auto bg-white rounded-[5px] shadow-[0_0_10px_rgba(0,_0,_,_0.2)] transition-all duration-300 ease-in-out ${
                        RegisterPopup
                            ? 'transform scale-100 opacity-100 visible'
                            : 'transform scale-[0.7] opacity-0 invisible'
                    }`}
                >
                    {/* Register Form Title */}
                    <div className="flex justify-between items-center py-5 px-10 border-b border-b-[#ebebeb]">
                        {/* Register Form Title Text */}
                        <div className="text-[28px] font-medium text-[#000]">
                            {CurrentPage === 1
                                ? 'Create an Account'
                                : 'Password Confirmation'}
                        </div>
                        {/* Register Form Title Close */}
                        <div
                            onClick={RegisterPopupHandler}
                            className="cursor-pointer p-[15px] bg-[#000] rounded-[5px] selection:hover:bg-themePrimary duration-300 ease-in-out"
                        >
                            <RegisterFormTitleCloseIcon className="text-white w-4 h-4" />
                        </div>
                    </div>
                    {/* Register Form Body */}
                    <div className="py-6 px-10">
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            {CurrentPage === 1 && (
                                <>
                                    <div className="flex gap-6 pt-2 pb-8 w-full">
                                        {/* Label 1 */}
                                        <div className="w-6/12">
                                            <input
                                                type="radio"
                                                id="freelancer-radio"
                                                defaultValue="candidate"
                                                className="hidden absolute peer"
                                                {...register('freelancer_role')}
                                                defaultChecked
                                            />
                                            <label
                                                htmlFor="freelancer-radio"
                                                className="bg-themePrimary/20 block w-full text-themeDark hover:bg-themePrimary/30 duration-300 ease-in-out hover:text-themePrimary px-3 py-2.5 text-center cursor-pointer rounded peer-checked:bg-themePrimary peer-checked:text-white"
                                            >
                                                Candidate
                                            </label>
                                        </div>
                                        {/* Label 2 */}
                                        <div className="w-6/12">
                                            <input
                                                type="radio"
                                                id="employer-radio"
                                                defaultValue="employer"
                                                {...register('freelancer_role')}
                                                className="hidden absolute peer"
                                            />
                                            <label
                                                htmlFor="employer-radio"
                                                className="bg-themePrimary/20 block text-themeDark hover:bg-themePrimary/30 duration-300 ease-in-out hover:text-themePrimary px-3 py-2.5 w-full text-center cursor-pointer rounded peer-checked:bg-themePrimary peer-checked:text-white"
                                            >
                                                Employer
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            className="block mb-2 text-themeDarker"
                                            htmlFor=""
                                        >
                                            First Name
                                        </label>
                                        <input
                                            className={`appearance-none block w-full !p-3 leading-5 text-coolGray-900 border ${
                                                errors?.first_name
                                                    ? '!border-red-500'
                                                    : 'border-gray'
                                            } rounded-lg placeholder-themeLight text-themeLight focus:outline-none `}
                                            type="name"
                                            {...register('first_name', {
                                                required: true,
                                            })}
                                            placeholder="Enter Your First Name"
                                        />
                                        {errors?.first_name && (
                                            <span className="text-red-600 text-xss italic">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            className="block mb-2 text-themeDarker"
                                            htmlFor=""
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            className={`appearance-none block w-full !p-3 leading-5 text-coolGray-900 border ${
                                                errors?.last_name
                                                    ? '!border-red-500'
                                                    : 'border-gray'
                                            } rounded-lg placeholder-themeLight text-themeLight focus:outline-none `}
                                            type="name"
                                            {...register('last_name', {
                                                required: true,
                                            })}
                                            placeholder="Enter Your Last Name"
                                        />
                                        {errors?.last_name && (
                                            <span className="text-red-600 text-xss italic">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            className="block mb-2 text-themeDarker"
                                            htmlFor=""
                                        >
                                            Email
                                        </label>
                                        <input
                                            className={`appearance-none block w-full !p-3 leading-5 text-coolGray-900 border rounded-lg placeholder-themeLight text-themeLight focus:outline-none focus:ring-2 ${
                                                errors?.email
                                                    ? '!border-red-500'
                                                    : 'border-gray'
                                            } focus:ring-themePrimary focus:ring-opacity-50`}
                                            type="name"
                                            {...register('email', {
                                                required: true,
                                            })}
                                            placeholder="Enter Your Email"
                                        />
                                        {errors?.email && (
                                            <span className="text-red-600 text-xss italic">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                    <label className="block mb-2 text-themeDarker" htmlFor="phoneNumber">
                                        Phone Number
                                    </label>
                                    <input
                                        className={`appearance-none block w-full !p-3 leading-5 text-coolGray-900 border ${
                                            errors?.phoneNumber ? '!border-red-500' : 'border-gray'
                                        } rounded-lg placeholder-themeLight text-themeLight focus:outline-none focus:ring-2 ${
                                            errors?.phoneNumber
                                                ? '!border-red-500'
                                                : 'border-gray'
                                        } rounded-lg placeholder-themeLight text-themeLight focus:outline-none focus:ring-2 focus:ring-themePrimary focus:ring-opacity-50`}
                                        type="tel"
                                        {...register('phoneNumber', {
                                            required: true,
                                            // Add validation rules for the phone number if needed
                                        })}
                                        placeholder="Enter Your Phone Number"
                                    />
                                    {errors?.phoneNumber && (
                                        <span className="text-red-600 text-xss italic">
                                            This field is required
                                        </span>
                                    )}
                                </div>

                                    <div className="mb-3">
                                        <label
                                            className="block mb-2 text-themeDarker"
                                            htmlFor="state"
                                        >
                                            Your State
                                        </label>
                                        <select
                                            id="state"
                                            value={selectedState}
                                            onChange={(e) =>
                                                setSelectedState(e.target.value)
                                            }
                                            className={`appearance-none block w-full !p-3 leading-5 text-coolGray-900 border ${
                                                errors?.state
                                                    ? '!border-red-500'
                                                    : 'border-gray'
                                            } rounded-lg placeholder-themeLight text-themeLight focus:outline-none focus:ring-2 focus:ring-themePrimary focus:ring-opacity-50`}
                                        >
                                            <option value="">
                                                Select State
                                            </option>
                                            {states.map((state) => (
                                                <option
                                                    key={state}
                                                    value={state}
                                                >
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
                                        {errors?.state && (
                                            <span className="text-red-600 text-xss italic">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            className="block mb-2 text-themeDarker"
                                            htmlFor="location"
                                        >
                                            Your Location
                                        </label>
                                        <select
                                            id="location"
                                            value={selectedLocation}
                                            onChange={(e) =>
                                                setSelectedLocation(
                                                    e.target.value
                                                )
                                            }
                                            className={`appearance-none block w-full !p-3 leading-5 text-coolGray-900 border ${
                                                errors?.location
                                                    ? '!border-red-500'
                                                    : 'border-gray'
                                            } rounded-lg placeholder-themeLight text-themeLight focus:outline-none focus:ring-2 focus:ring-themePrimary focus:ring-opacity-50`}
                                        >
                                            <option value="">
                                                Select Location
                                            </option>
                                            {locations.map((location) => (
                                                <option
                                                    key={location}
                                                    value={location}
                                                >
                                                    {location}
                                                </option>
                                            ))}
                                        </select>
                                        {errors?.location && (
                                            <span className="text-red-600 text-xss italic">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}

                            {CurrentPage === 2 && (
                                <>
                                    <div className="mb-3">
                                        <label
                                            className="block mb-2 text-themeDarker"
                                            htmlFor=""
                                        >
                                            Password
                                        </label>
                                        <input
                                            className={`appearance-none block w-full !p-3 leading-5 text-coolGray-900 border ${
                                                errors?.password
                                                    ? '!border-red-500'
                                                    : 'border-gray'
                                            } rounded-lg placeholder-themeLight text-themeLight focus:outline-none `}
                                            type="password"
                                            {...register('password', {
                                                required: {
                                                    value: true,
                                                    message:
                                                        'This field is required',
                                                },
                                            })}
                                            placeholder="Enter Password"
                                        />
                                        {errors?.password && (
                                            <span className="text-red-600 text-xss italic">
                                                {errors?.password?.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-themeDarker"
                                            htmlFor=""
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            className={`appearance-none block w-full !p-3 leading-5 text-coolGray-900 border ${
                                                errors?.confirm_password
                                                    ? '!border-red-500'
                                                    : 'border-gray'
                                            } rounded-lg placeholder-themeLight text-themeLight focus:outline-none `}
                                            type="password"
                                            {...register('confirm_password', {
                                                required: {
                                                    value: true,
                                                    message:
                                                        'This field is required',
                                                },
                                                validate: (value) =>
                                                    value ===
                                                        watch('password') ||
                                                    'Passwords do not match',
                                            })}
                                            placeholder="Enter Confirm Password"
                                        />
                                        {errors?.confirm_password && (
                                            <span className="text-red-600 text-xss italic">
                                                {
                                                    errors?.confirm_password
                                                        ?.message
                                                }
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}

                            <div className="flex gap-4">
                                {CurrentPage === 2 && (
                                    <button
                                        onClick={previousHandler}
                                        type="button"
                                        className="inline-block !py-3 px-7 mb-6 w-full duration-300 ease-in-out text-base text-white font-normal text-center leading-6 bg-themePrimary rounded-md hover:bg-black"
                                    >
                                        Previous
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`flex gap-2 justify-center items-center !py-3 px-7 mb-6 w-full duration-300 ease-in-out text-base text-white font-normal text-center leading-6 ${
                                        isSubmitting
                                            ? 'bg-themeDarkerAlt'
                                            : 'bg-themePrimary'
                                    } rounded-md hover:bg-black`}
                                >
                                    {CurrentPage === 1 ? (
                                        'Next'
                                    ) : (
                                        <>
                                            {isSubmitting
                                                ? 'Please wait...'
                                                : 'Sign Up'}
                                            {isSubmitting && <FormLoader />}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                        <p className="text-center">
                            <span className="text-xss1 text-deep">
                                Already have an account?
                            </span>
                            <button
                                onClick={LoginHandler}
                                className="inline-block text-xss1 text-themePrimary hover:underline ml-4"
                            >
                                Log In
                            </button>
                        </p>
                    </div>
                </div>
                {/* Popup Overlay */}
                <div
                    onClick={RegisterPopupHandler}
                    className="fixed top-0 left-0 w-full h-full z-[1]"
                />
            </div>
        </section>
    );
};

const RegisterFormTitleCloseIcon = ({ ...props }) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                fill="currentColor"
            />
        </svg>
    );
};

export default PopupRegister;
