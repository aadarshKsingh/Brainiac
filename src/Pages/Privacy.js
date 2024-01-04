import React from "react";
import Nav from "../Components/Nav";
import { Typography } from "@mui/material";
export const Privacy = () => {
  return (
    <>
      <Nav page="login"/>
      <div className="font-montserrat text-black mx-36 my-24">
        <Typography variant="h2" sx={{fontFamily:"montserrat",fontWeight:"bolder"}}>Privacy Policy</Typography>
        <div className="pt-10">
        Brainiac ("us", "we", or "our") operates the Brainiac website (the
        "Service"). This page informs you of our policies regarding the
        collection, use, and disclosure of personal data when you use our
        Service and the choices you have associated with that data. We use your
        data to provide and improve the Service. By using the Service, you agree
        with the Privacy Policy.
        <br /><br />
        <b>Effective date</b>: January 5,2024
        <br /><br />
        This page informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service and the choices you
        have associated with that data. We use your data to provide and improve
        the Service. By using the Service, you agree to the collection and use
        of information in accordance with this policy.
        </div>
        <br />
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Information Collection and Use</Typography>
        <div className="pt-3 pb-10">We collect several different types of information for various purposes
        to provide and improve our Service to you.</div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Types of Data Collected</Typography>
        <div className="pt-3 pb-10">Personal Data While using our Service, we may ask you to provide us with
        certain personally identifiable information that can be used to contact
        or identify you ("Personal Data"). Personally identifiable information
        may include, but is not limited to:
        <ul className="list-disc">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>
        We may use your Personal Data to contact you with newsletters,
        marketing, or promotional materials and other information that may be of
        interest to you. You may opt out of receiving any, or all, of these
        communications from us by following the unsubscribe link or instructions
        provided in any email we send.
        
        </div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Usage of Data</Typography>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Introduction</Typography>
        <div className="pt-3 pb-10">Welcome to our educational platform. This Privacy Policy describes how
        we collect, use, and disclose information when you use our platform,
        including information you provide to us and information we collect when
        you access or use our services.</div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Information We Collect</Typography>
        <div className="pt-3 pb-10">When you use our educational platform, we may collect the following
        types of information:
        <ol className="list-decimal">
          <li>Personal Information:</li>
          <ul className="list-disc">
            <li className="ml-10 pb-5">
              When you sign up as a user, we may collect personal information
              such as your name, email address, and institution details.
            </li>
          </ul>
          <li>Usage Information:</li>
          <ul className="list-disc">
            <li className="ml-10 pb-5">
              We may collect information about how you interact with our
              educational platform, including the lectures you access, notes
              generated, assignments completed, and tests taken.
            </li>
          </ul>
          <li>Automatically Collected Information:</li>
          <ul className="list-disc">
            <li className="ml-10 pb-5">
              When you use our platform, we may automatically collect certain
              information, such as your IP address, device information, and
              usage statistics.
            </li>
          </ul>
        </ol>
        </div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>How We Use Information</Typography>
        <div className="pt-3 pb-10">We use the information we collect for the following purposes:
        <ol>
          <li>Providing and Improving Our Services:</li>
          <ul>
            <li>
              We use the information to provide and personalize our educational
              services, develop new features, and improve the overall user
              experience.
            </li>
          </ul>
          <li>AI-Generated Content:</li>
          <ul>
            <li>
              The data collected may be used to enhance our AI-generated
              content, including personalized notes and assignments, to better
              serve the educational needs of our users.
            </li>
          </ul>
          <li>Communication:</li>
          <ul>
            <li>
              We may use your contact information to communicate with you about
              our services, updates, and promotional offers.
            </li>
          </ul>
        </ol>
        </div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Data Security</Typography>
       <div className="pt-3 pb-10"> We take the security of your information seriously and have implemented
        appropriate technical and organizational measures to protect the
        information we collect and process. However, no method of transmission
        over the internet or electronic storage is completely secure, so we
        cannot guarantee absolute security.</div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Data Sharing</Typography>
        <div className="pt-3 pb-10">We do not sell, trade, or otherwise transfer your information to third
        parties for their direct marketing purposes. We may share information
        with third-party service providers that assist us in providing our
        services, but they are only authorized to use the information as
        necessary to provide the services to us.</div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Data Retention</Typography>
        <div className="pt-3 pb-10">We retain the information we collect for as long as necessary to fulfill
        the purposes outlined in this Privacy Policy unless a longer retention
        period is required by law.</div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Your Choices and Rights</Typography>
        <div className="pt-3 pb-10">You have the right to access, update, or delete your personal
        information. You may also opt-out of receiving promotional
        communications from us.</div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Changes to This Privacy Policy</Typography>
        <div className="pt-3 pb-10">We may update this Privacy Policy from time to time, and we will notify
        you of any changes by posting the new Privacy Policy on this page.</div>
        <Typography variant="h4" sx={{fontFamily:'montserrat',fontWeight:'bolder'}}>Contact Us</Typography>
        <div className="pt-3 pb-10">If you have any questions or concerns about this Privacy Policy, please
        contact us at brainiac@pm.me. By using our educational platform,
        you acknowledge that you have read and understood this Privacy Policy
        and agree to the collection, use, and disclosure of your information as
        described herein.</div>
      </div>
    </>
  );
};
