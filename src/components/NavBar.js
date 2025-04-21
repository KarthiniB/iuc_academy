import {useState} from 'react';
const NavBar = () => {
    const [hovered, setHovered] = useState(null);

    const menuItems = [
        {name:"Home",
            items:[]
        },
        {name:"About",
            items:[
                {
                    heading:"About IUC",
                    subHeading:[]
                }
            ]
        },
        { name: "Training Courses", 
            items: [
                {
                    heading:"Full Stack Training",
                    subHeading:["Full Stack Training Courses"]
                },
                {
                    heading:"Java Training",
                    subHeading:["Core Java Training", "J2EE Training"]
                },
                {
                    heading:"Software Testing Training",
                    subHeading:["Manual Testing Training", "Selenium Testing Training", "SoapUI Training"]
                },
                {
                    heading:"Web Designing Training",
                    subHeading:["HTML Training", "CSS Training", "Javascript Training", "JQuery Training", "PHP Training"]
                },
                {
                    heading:"Oracle Training",
                    subHeading:["Oracle Training"]
                },
                {
                    heading:"Microsoft Training",
                    subHeading:[".NET Training"]
                }, 
                {
                    heading:"Mobile Appplications Training",
                    subHeading:["Android Training", "iOS Training", "Objective-C Training"]
                },
                {
                    heading:"Other Trainings",
                    subHeading:["C C++ Training", "UNIX SHELL Scripting Training", "PERL Training", "SEO Training"]
                }
            ]},
        { name: "Online Courses", 
            items:[
                {
                    heading:"Java Training",
                    subHeading:["Core Java Training", "J2EE Training"]
                },
                {
                    heading:"Software Testing Training",
                    subHeading:["Manual Testing Training", "Selenium Testing Training", "SoapUI Training"]
                },
                {
                    heading:"Web Designing Training",
                    subHeading:["HTML Training", "CSS Training", "Javascript Training", "JQuery Training", "PHP Training"]
                },
                {
                    heading:"Oracle Training",
                    subHeading:["Oracle Training"]
                },
                {
                    heading:"Microsoft Training",
                    subHeading:[".NET Training"]
                },
                {
                    heading:"Mobile Applicaions Training",
                    subHeading:["Android Training", "iOS Training", "Objective-C Training"]
                },
                {
                    heading:"Other Trainings",
                    subHeading:["C C++ Training", "UNIX SHELL Scripting Training", "PERL Training", "SEO Training"]
                }
            ]},
            {
                name:"Service",
                items:[
                {
                    heading:"Web Development",
                    subHeading:["PHP/MySQL", "Web Applications", "Open Source Solutions", 
                        "Enterprise Solutions", "CRM Solutions", "Ruby On Rails", "HTML5 Development", 
                        "JQuery Development", "Web Services - API XML/JSON", "Yii Development"]
                },
                {
                    heading:"Website Design",
                    subHeading:["Layout Design", "Responsive Design", "Application Interface Design", 
                        "Prototype Design", "Corporate Design", "Facebook Page Design", "Banner Design", 
                        "Logo Design", "Brochure Design", "Wireframe Design"]
                },
                {
                    heading:"Web Maintenance",
                    subHeading:["Content Updates", "Files and Data Backup", "Customer Response Service"]

                },
                {
                    heading:"Web Marketing",
                    subHeading:["Search Engine Optimisation", "Social Mdia Marketing", "Google Adword Management", 
                        "Google Analytics Management"]
                },
                {
                    heading:"eCommerce Application",
                    subHeading:["Magento Customisation", "Tomato Cart Customisation", "Open Cart Customisation", 
                        "eCommerce Solution", "OS Commerce Customisation", "Prestashop Customisation", 
                        "Virtuemart Customisation", "Zen Cart Customisation", "Brochure Design", "Wireframe Design"]
                },
                {
                    heading:"CMS Applications",
                    subHeading:["Joomla Development", "Wordpress Development", "Drupal Development", "CMS Made Simple(CMS)"]
                },
                {
                    heading:"Mobile Apps",
                    subHeading:["Mobile Website", "iOS Apps", "Android Apps", "Mobile Frameworks"]
                },
                {
                    heading:"Domain & Hosting",
                    subHeading:["Domain Registration", "Domain Transfer", "Linux Server Hosting", "Windows Server Hosting"]
                }
            ]},
            {
                name:"Gallery",
                items:[]
            },
            {
                name:"Careers",
                items:[
                    {
                        heading:"Job",
                        subHeading:["Full time", "Part Time"]
                    },
                    {
                        heading:"Internship",
                        subHeading:["Long Term", "Short Term"]
                    }
                ]
            },
            {
                name:"Contact Us",
                items:[]
            }
    ];
    return(
        <>
            <nav className="navbar"> 
                <ul className="nav-list">{menuItems.map((menu, index) => (
                    <li key={index} className="nav-item" onMouseEnter={()=>
                            setHovered(index)}
                        onMouseLeave={()=>
                            setHovered(null)}>
                                <span className="nav-link">
                                    {menu.name}
                                </span>
                                {hovered === index && menu.items.length > 0 &&(
                                    <div className="mega-menu">
                                        {menu.subHeading.map((subhead, sindex)=>(
                                            <div key={sindex} className="mega-section">
                                                <h4 className="section-heading">{subhead.heading}</h4>
                                                <ul className="section-links">{subhead.subHeading.map((link, lindex) =>(
                                                    <li key={lindex} className="dropdown-item">{link}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </li>
                    ))}       
                </ul>
            </nav>
        </>
    );
};
export default NavBar;