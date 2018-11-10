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

        let arrayStr:string = 'abcdefghijklmnopqrstuvwxyz';
        let txt:string = "";
        let num:number = 0;

        let insert:string = "<div>";
        for (i=0; i<5; i++) {
            txt = arrayStr[i + 2];
            num = i ** 2;
            insert += `<Entry text=${txt} num=${num} />`;        }

        insert += "</div>";

        return (<div>

            hi SOMETHING {outString}
            <div dangerouslySetInnerHTML={{__html: insert}}/>
            
        </div>)


    }
}
