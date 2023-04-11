import React from 'react';
import CustomerComp from "./CustomerComp";
import CustomerDTO from "./dto/CustomerDTO";
import CustomerListDTO from "./dto/CustomerListDTO";
import CustomerArrayListComp from "./CustomerArrayListComp";

interface MyProps {

}
interface MyState {
    customer:CustomerDTO
    customer2:CustomerListDTO
}
class SpeadOperater extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            customer:
                {
                    name1:"ss",
                    age:12,
                    arrayNum:[1,2,3,4]
                },
            customer2:{
                name1:"kamal",
                age:33,
                arrayNum:[1,2,3,4],
                anyData:[
                    {
                        cusId:"C001",
                        cusIndex:1222
                    },
                    {
                        cusId:"C002",
                        cusIndex:1111
                    }
                ]
            }

        }
    }

    render() {
        let dataNew:any=[{k1:'aaa', k2:'bbb'}, {k1:'ccc', k2:'ddd'}]
        return (
            <div>
                {/*<CustomerComp {...this.state.customer}/>*/}
                {dataNew.map((data:any)=>{
                    return(
                        <CustomerArrayListComp key={data.k1} {...data}/>
                    )
                })}
                <CustomerArrayListComp {...this.state.customer2}/>
            </div>
        );
    }
}

export default SpeadOperater;