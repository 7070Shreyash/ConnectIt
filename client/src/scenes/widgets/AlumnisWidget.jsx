import { useDispatch, useSelector } from "react-redux";
import AlumniWidget from "./AlumniWidget";

const AlumnisWidget = ({ }) => {
   
const alumnidesc = [
    {name : "Rahul" , description : "Experienced Software Engineer with a demonstrated history of working in the computer software industry. Working for ADAS based company named Linoy Technologies. Skilled in Computer vision, Image processing, C, C++, Python, and Linux. Strong engineering professional with a Master's Degree focused in Computer Science from International Institute of Information Technology. " , userPicturePath : "A1.jpg"},
    {name : "Ankit" , description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa voluptates accusamus, consequuntur omnis laborum dicta voluptatem laboriosam assumenda. Explicabo dignissimos, fugit temporibus architecto illo, voluptate suscipit ipsa maxime iusto corporis culpa deleniti similique? Assumenda, eaque. Unde fugiat, quaerat aliquid dolorum, iste a quos maiores accusamus aperiam iusto mollitia porro asperiores eos incidunt itaque laudantium accusantium." , userPicturePath : "A2.jpg"},
    {name : "Shikhar" , description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt consectetur, libero rem fugiat reiciendis voluptas nisi molestiae, voluptatibus cupiditate ut, impedit pariatur saepe beatae. Facere odit eum harum repellendus quod consequuntur maxime corrupti tempora nostrum obcaecati itaque tenetur accusamus, officiis necessitatibus asperiores aperiam? Dolor consequatur beatae aliquid dolorum vitae dolores quasi illum neque consequuntur sapiente?" , userPicturePath : "A4.jpg"},
];
  return (
   <>
        {alumnidesc.map((value)=>
                <AlumniWidget
                name = {value.name}
                description = {value.description}
                userPicturePath = {value.userPicturePath}
                />
    )
        }
   </>
  );
};

export default AlumnisWidget;
