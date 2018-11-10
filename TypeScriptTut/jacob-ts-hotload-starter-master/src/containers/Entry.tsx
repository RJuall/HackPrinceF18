import * as React from "react";


export interface EntryState {
}


export interface EntryProps extends React.Props<Entry> {
}


export default class Entry extends React.Component<EntryProps, EntryState> {



    render() {
                       
        return (<div>

            <li>Test Entry</li>

        </div>)


    }
}
