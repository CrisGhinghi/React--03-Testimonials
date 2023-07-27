import { useState, useEffect } from "react"

import { Title } from "./components/Title/Title"
import { Button } from "./components/Button/Button"

import { BsFillFileEarmarkPostFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { BiCommentDetail } from "react-icons/bi"

export const Testimonials = () => {
    const [testimonials, setTestimonials] = useState()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (testimonials) {
            fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
                .then(response => response.json())
                .then(json => {
                    setItems(json)
                    console.log(json)
                })
        }
    }, [testimonials])


    return (
        <div className="container">
            <Title text={"Testimonials"} />
            <Button
                text={"Posts"}
                className={"btn-container"}
                btnClass={"btn-info"}
                icon={<BsFillFileEarmarkPostFill
                    className="mr-05" />}
                onClick={() => setTestimonials("Posts")}
            />
            <Button
                text={"Users"}
                btnClass={"btn-info"}
                icon={<FaUserAlt
                    className="mr-05" />}
                onClick={() => setTestimonials("Users")}
            />
            <Button
                text={"Comments"}
                btnClass={"btn-info"}
                icon={<BiCommentDetail
                    className="mr-05" />}
                onClick={() => setTestimonials("Comments")}
            />

            <Title
                classes={"subtitle text-primary"}
                text={!testimonials ? "Select from above!" : testimonials}
            />

            {items.map((item, index) => {
                return (
                    <div className="card card-primary mb-2" key={index}>
                        {item.name && <h2 className="card-header">{item.name}</h2>}
                        <div className="card-body">
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                        {item.email && (
                            <small className="card-footer">{item.email}</small>
                        )}
                    </div>
                );
            })}

        </div>
    )
}
