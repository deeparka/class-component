import React from 'react'
import { useParams } from 'react-router'

function Stuff() {

    const params = useParams();
    
    if (params.id === "100") {
        return (
            <div>
                <h2>Id: {params.id}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit beatae necessitatibus, velit similique alias quaerat ex provident. Libero molestiae, nam recusandae incidunt odio voluptates omnis sit odit veniam error!</p>
            </div>
          )
    } else {
        return (
            <div>
                <h4>Default stuff</h4>
            </div>
        )
    }
  }

export default Stuff