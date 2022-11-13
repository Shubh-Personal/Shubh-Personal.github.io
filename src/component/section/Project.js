import React from "react";
import ProjectCard from "./subsection/ProjectCard";

const Project = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          <ProjectCard
            imgUrl="https://reviewed-com-res.cloudinary.com/image/fetch/s--bzwSt_ad--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_547,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1646825326000/francesco_zorzi_Reviewed_Kids_Chores_0_hero_a.jpg"
            name="Tasker"
            description="A web applicaiton developed for managing household tasks. Tasks can be assigned, tracked and commented. NodeJs is used for developing backend and ReactJs for frontend."
            url="#"
          />
          <ProjectCard
            imgUrl="https://image.shutterstock.com/image-vector/big-task-word-small-people-260nw-1429801825.jpg"
            name="Game Dis"
            description="A web applicaiton developed for managing household tasks. Tasks can be assigned, tracked and commented. NodeJs is used for developing backend and ReactJs for frontend."
            url="#"
          />
          <ProjectCard
            imgUrl="https://image.shutterstock.com/image-vector/big-task-word-small-people-260nw-1429801825.jpg"
            name="Game Dis"
            description="A web applicaiton developed for managing household tasks. Tasks can be assigned, tracked and commented. NodeJs is used for developing backend and ReactJs for frontend."
            url="#"
          />
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <ProjectCard
            imgUrl="https://image.shutterstock.com/image-vector/big-task-word-small-people-260nw-1429801826.jpg"
            name="Tasker"
            description="A web applicaiton developed for managing household tasks. Tasks can be assigned, tracked and commented. NodeJs is used for developing backend and ReactJs for frontend."
            url="#"
          />
          <ProjectCard
            imgUrl="https://image.shutterstock.com/image-vector/big-task-word-small-people-260nw-1429801825.jpg"
            name="Game Dis"
            description="A web applicaiton developed for managing household tasks. Tasks can be assigned, tracked and commented. NodeJs is used for developing backend and ReactJs for frontend."
            url="#"
          />
          <ProjectCard
            imgUrl="https://image.shutterstock.com/image-vector/big-task-word-small-people-260nw-1429801825.jpg"
            name="Game Dis"
            description="A web applicaiton developed for managing household tasks. Tasks can be assigned, tracked and commented. NodeJs is used for developing backend and ReactJs for frontend."
            url="#"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
