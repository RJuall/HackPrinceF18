import * as React from "react";


export interface EntryState {
}


export interface EntryProps extends React.Props<Entry> {
    text:string,
    num:number
}


export default class Entry extends React.Component<EntryProps, EntryState> {



    render() {
                       
        return (<div>

            <li>{this.props.text} : {this.props.num}</li>

        </div>)


    }
}
