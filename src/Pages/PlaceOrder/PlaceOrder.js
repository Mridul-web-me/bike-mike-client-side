import React from 'react'
// import { useParams } from 'react-router'

const PlaceOrder = ({ bikes }) => {
    // const { _id } = useParams()
    const { _id, name } = bikes;
    // const [bikes, setBikes] = useState([])
    // useEffect(() => {
    //     fetch('https://floating-oasis-79529.herokuapp.com/bikes')
    //         .then(res => res.json())
    //         .then(data => setBikes(data))
    // }, [])
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Place Order</h5>
                    </div>
                    <div className="modal-body">
                        <input type="text" disabled placeholder={_id} />
                        {/* <h2>{_id}</h2> */}
                        <h2>{name}</h2>
                        {/* <img src={imgUrl} alt="" /> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlaceOrder
