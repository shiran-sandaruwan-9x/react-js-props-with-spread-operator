import React from 'react';
import CustomerDTO from "./dto/CustomerDTO";

interface MyProps {
    name1:string
    age:number
    arrayNum:number[]
}

interface MyState {

}
class CustomerComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state={
        }
    }

    componentDidMount() {

    }



    render() {
        console.log(this.props.name1)
        return (
            <div>
                {/*{*/}
                {/*    this.props.children?.map((cus:any)=>(*/}
                {/*    <h1>cus.name1</h1>*/}
                {/*))}*/}
            </div>
        );
    }
}

export default CustomerComp;