import * as React from "react";
import Entry from "./Entry";


export interface AppState {
}


export interface AppProps extends React.Props<App> {
}


export default class App extends React.Component<AppProps, AppState> {



    render() {
        let i:number = 0;
        let outString:string = "abc";
        for (i; i < 2; i++) {
            outString += i;
        }

        return (<div>

            hi SOMETHING {outString}

            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />

        </div>)


    }
}
