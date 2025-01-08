import { Divider } from "primereact/divider"

import article1 from "../../../assets/tendm/article1.jpeg"
import tornado from "../../../assets/tendm/tornado.jpeg"

const TrendBlogContainer = () => {
    const blogs = [
        {
            id: 1,
            title: "BIMBOM BAP COLOMBIANA 🎶 🇲🇬",
            date: "29 Décembre 2024 - 13:40",
            like : 34,
            comment : 107,
            couverture : tornado,
        },
        {
            id: 2,
            title: "Miady izy roa dia ozy le bandy",
            date: "29 Décembre 2024 - 13:40",
            like : 34,
            comment : 107,
            couverture : tornado,
        },
        {
            id: 3,
            title: "10% DE REMISE IREO MANAO REGIME",
            date: "29 Décembre 2024 - 13:40",
            like : 34,
            comment : 107,
            couverture : tornado,
        },
        {
            id: 4,
            title: "BIMBOM BAP COLOMBIANA 🎶 🇲🇬",
            date: "29 Décembre 2024 - 13:40",
            like : 34,
            comment : 107,
            couverture : tornado,
        },
    ]

    return (
        <div>
            <div className = "flex justify-between">
                <div>
                    <h3 className = "text-3xl font-satisfy">Derniers blog</h3>
                    <p className = "text-xs -mt-3">Consultez ici les derniers blog publiés par le restaurant Tend M</p> 
                </div>
                <div>
                    <p className = "hover:text-brick text-sm cursor-pointer mt-11">Voir tout <i className = "pi pi-arrow-right ms-2"></i></p>
                </div>
            </div>
            
            <div className = "grid grid-cols-2 gap-x-8 mt-10">
                <div>
                    <img src={article1} alt="Article 1" className="rounded-xl object-cover w-full h-96"/>
                    <div>
                        <p className = "text-xs text-gray-500">29 Décembre 2024 - 13:40</p>
                        <h5 className = "font-semibold text-lg">Rahoviana no ifampiarahaba tratry ny taona ?</h5>
                        <p className = "text-xs text-gray-500 -mt-4">Rahoviana no ifampiarahaba tratry ny taona ? ny vehivavy no tena betsaka misakafo ato, sady tena mankafy Tend M</p>
                    </div>
                    <Divider className="mt-10"/>
                    <div className = "flex justify-between pt-2">
                        <div className = "flex space-x-20">
                            <div className="flex space-x-3">
                                <i className = "pi pi-thumbs-up text-gray-700 cursor-pointer hover:text-brick" title = "J'aime"></i>
                                <span className="mt-1 text-gray-700">34</span>
                            </div>
                            <div className="flex space-x-3">
                                <i className = "pi pi-comment text-gray-700 cursor-pointer hover:text-brick" title = "Commenter"></i>
                                <span className="mt-1 text-gray-700">107</span>
                            </div>
                        </div>
                        <i className = "pi pi-bookmark text-gray-700 hover:text-brick cursor-pointer" title = "Sauvergarder"></i>
                    </div>
                </div>

                <div className = "grid grid-cols-1 gap-y-4">
                    {blogs.map((blog) => (
                         <div key={blog.id} className = "bg-white p-4 grid grid-cols-[60%_40%] gap-x-6 rounded-3xl cursor-pointer" style = {{border: "1px solid #E5E7EB"}}>
                         <div>
                             <h5 className = "font-semibold text-base mt-1">{blog.title}</h5>
                             <p className = "text-xs text-gray-500 -mt-2">{blog.date}</p>
                             <div className = "flex justify-between pt-4">
                                 <div className = "flex space-x-10">
                                     <div className="flex space-x-3">
                                         <i className = "pi pi-thumbs-up text-gray-700 cursor-pointer hover:text-brick" title = "J'aime"></i>
                                         <span className="mt-1 text-gray-700">{blog.like}</span>
                                     </div>
                                     <div className="flex space-x-3">
                                         <i className = "pi pi-comment text-gray-700 cursor-pointer hover:text-brick" title = "Commenter"></i>
                                         <span className="mt-1 text-gray-700">{blog.comment}</span>
                                     </div>
                                 </div>
                                 <i className = "pi pi-bookmark text-gray-700 hover:text-brick cursor-pointer" title = "Sauvergarder"></i>
                             </div>
                         </div>
                         <div>
                             <img src={blog.couverture} alt="Blog" className = "object-cover w-36 h-28 rounded-2xl"/>
                         </div>
                       
                     </div>
                    ))}
                   
                </div>
               
            </div>
        </div>
    )
}

export default TrendBlogContainer