import React from 'react'
import './PageSection.css'

function PageSection(props) {
   return (
      <main>
         <section className="section-container">
            <h2> {props.titulo} </h2>
            {props.children}
         </section>
      </main>
   );
}

export default PageSection;