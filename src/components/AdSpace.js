import React, { useEffect, useState } from "react"
import axios from "axios"

export default function AdSpace() {
  const [dadJoke, setDadJoke] = useState("")

  useEffect(() => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "text/plain",
        },
      })
      .then(res => {
        console.log(res)
        setDadJoke(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return <div className="text-center">{dadJoke}</div>
}
