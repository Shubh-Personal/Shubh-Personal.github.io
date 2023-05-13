import React from "react";
import ProjectCard from "./subsection/ProjectCard";
import "./css/project.css"
const Project = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="col-flex">
        <div className="row-flex">
          <ProjectCard
            imgUrl="https://reviewed-com-res.cloudinary.com/image/fetch/s--bzwSt_ad--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_547,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1646825326000/francesco_zorzi_Reviewed_Kids_Chores_0_hero_a.jpg"
            name="Tasker"
            description="A web applicaiton developed for managing household tasks. Tasks can be assigned, tracked and commented. NodeJs is used for developing backend and ReactJs for frontend."
            url="#"
          />
          <ProjectCard
            imgUrl="https://img.freepik.com/free-vector/people-meeting-online-via-video-conference-flat-illustration-cartoon-group-colleagues-virtual-collective-chat-during-lockdown_74855-14136.jpg?w=740&t=st=1682642021~exp=1682642621~hmac=5cff89f93a6ee08337ab12298ede53ee76bcc0ececabb6201ebb710f9e99119a"
            name="Group-videochat"
            description="A MERN web applicaiton developed for group video chatting. This project is utilizing WebRTC and Socket.IO."
            url="#"
          />
          <ProjectCard
            imgUrl="https://img.freepik.com/free-vector/hand-drawn-credit-assessment-concept-with-documents_23-2149154259.jpg?w=740&t=st=1682642393~exp=1682642993~hmac=2cd44a944ab23178a56e2b94cee0ce2429a114df353fbb4fcbf857e01ef1132f"
            name="DocParser"
            description="This a web application for parsing document using AI. I utilized an deep learning model for parsing and extracting key features from given document. This project is using MERN stack and model is fine-tuned using Tensorflow."
            url="#"
          />
        </div>
        <div className="row-flex">
          <ProjectCard
            imgUrl="https://img.freepik.com/free-vector/man-woman-teamwork-strategy-business-concept-people-moving-chess-figures-as-metaphor-partnership-creative-solution-plan_575670-256.jpg?w=740&t=st=1682643280~exp=1682643880~hmac=84d15004999134184ebb90607320f8e23596eae1ab17c51d8e1758ffe975d134"
            name="Chess"
            description="A web-based application which shows the chess board and all players. Application also shows all possible moves for chess piece. This is a react based application."
            url="#"
          />
          <ProjectCard
            imgUrl="https://img.freepik.com/free-vector/candlestick-chart-showing-progress-growth-company-happy-business-characters-stock-market-forex-trade-performance-going-up-flat-vector-illustration-finances-economy-achievement-concept_74855-21685.jpg?w=740&t=st=1682643788~exp=1682644388~hmac=0a35a984672aab6e8ccfac90a353447558ae6b9a0ab6bc6723ec689774dbeb1d"
            name="Stock Market"
            description="A springboot applicaiton developed for stock market application. A dockerized application for stock market with PostgreSQL and where user can create account and buy and sell stocks also admin user can create new stocks and schedule the market."
            url="#"
          />
          <ProjectCard
            imgUrl="https://img.freepik.com/free-vector/smartphone-woman-face-scan-recognition-biometric_24908-56395.jpg?w=740&t=st=1682644665~exp=1682645265~hmac=83747141a760f72aa901a5df8bbd170e36ba4a0390a1af65574bf8bd04b9f547"
            name="DocFace"
            description="A web applicaiton developed for saving documents online with face recognition. User can register using their face and upload their document and access their documents using face recognition. Application recognizr face using LBPH(Linear Binary Pattern Histogram) algorithm using DLIB library. PHP and vanilla JS was used to interact with application along with MySQL. "
            url="#"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
