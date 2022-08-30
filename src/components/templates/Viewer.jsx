import { useRef, Component } from "react"
import { Curriculum } from "./Curriculum"
import { useReactToPrint } from "react-to-print";


class MyComponent extends Component {
    render () {
        return (
            <Curriculum/>
        )
    }
}

export const Viewer = () => {
    const componentRef = useRef(null)
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    return (
        <div>
        <MyComponent ref={componentRef} />
        <button onClick={handlePrint}>Print</button>
        </div>
    )
}