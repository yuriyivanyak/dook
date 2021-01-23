import React from "react";

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <>
                <button className="btn btn-outline-dark mb-3" onClick={()=> {this.setState({isOpen: true})}}>Open Modal</button>

                {this.state.isOpen && <div className="modalka">
                    <div className="modal-body">
                        <h1>Title</h1>
                        <p>lorem lorem lorem</p>
                        <button className="btn btn-" onClick={()=> {this.setState({isOpen: false})}}> close modal</button>
                    </div>
                </div>}
            </>
        )
    }
}