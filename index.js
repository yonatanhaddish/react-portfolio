// import React, { useEffect } from 'react'

// function Nav(props) {
//     const {categories= [], setCurrentCategory, currentCategory, setAboutSelected}= props;

//     useEffect(() => {
//         document.title= currentCategory.name
//     })

//     return(
//         <header className="flex-row px-1">
//             <h2>Yonatan</h2>
//             <nav>
//                 <ul className="flex-row">
//                     <li className="mx-1" onClick={() => setAboutSelected(true)}>About Me 2.0</li>
//                     <li onClick={() => setAboutSelected(false)}>  hh </li>
//                     {categories.map((category) => (
//                         <li onClick={() => setAboutSelected(false)} className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
//                             <span onClick={() => {
//                                 setCurrentCategory(category)
//                             }}> {category.name}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </header>
        
//     )
// }

// export default Nav;