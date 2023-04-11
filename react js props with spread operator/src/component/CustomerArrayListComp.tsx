import React from 'react';

interface MyProps {
    name1:string,
    age:number,
    arrayNum:number[],
    anyData:any[]

    k1?:string,
    k2?:string
}

interface MyState {
    age:number
}
class CustomerArrayListComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            age:0
        }
    }

    componentDidMount() {

    }

    render() {
       // console.log(this.props.anyData[0].cusId)
       console.log(this.props.k1)
        console.log(this.props.age)
        return (
            <div></div>
        );
    }
}

export default CustomerArrayListComp;