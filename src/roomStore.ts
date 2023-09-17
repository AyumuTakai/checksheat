import { writable } from "svelte/store";
import type { Action } from "./eventStore";

export type Room = {
    name:string;
    furnitures:any[];
    sheats:any[];
    events:Action[];
}

export const rooms = writable<Room[]>([
    {
        name:"295",
        furnitures:[
            { x: 70, y: 440, width: 350, height: 60, text: "" },
            { x: 0, y: 354, width: 420, height: 60, text: "" },
            { x: 0, y: 260, width: 420, height: 60, text: "" },
            { x: 70, y: 170, width: 350, height: 60, text: "" },
            { x: 70, y: 80, width: 350, height: 60, text: "" },
            { x: 70, y: 0, width: 350, height: 60, text: "" },
    
            { x: 450, y: 440, width: 420, height: 60, text: "" },
            { x: 450, y: 354, width: 420, height: 60, text: "" },
            { x: 450, y: 260, width: 420, height: 60, text: "" },
            { x: 450, y: 170, width: 420, height: 60, text: "" },
            { x: 450, y: 80, width: 420, height: 60, text: "" },
            { x: 450, y: 0, width: 420, height: 60, text: "" },
    
            { x: 900, y: 440, width: 220, height: 60, text: "" },
            { x: 900, y: 354, width: 220, height: 60, text: "" },
            { x: 900, y: 260, width: 220, height: 60, text: "" },
            { x: 900, y: 170, width: 220, height: 60, text: "" },
            { x: 900, y: 80, width: 220, height: 60, text: "" },
            { x: 900, y: 0, width: 220, height: 60, text: "" },
    
            { x: 480, y: 540, width: 220, height: 60, text: "教卓" },
        ],
        sheats:[
            { cx: 110, cy: 384, no: 1 },
            { cx: 360, cy: 384, no: 2 },
            { cx: 580, cy: 384, no: 3 },
            { cx: 820, cy: 384, no: 4 },
            { cx: 110, cy: 290, no: 5 },
            { cx: 360, cy: 290, no: 6 },
            { cx: 580, cy: 290, no: 7 },
            { cx: 820, cy: 290, no: 8 },
            { cx: 110, cy: 200, no: 9 },
            { cx: 360, cy: 200, no: 11 },
            { cx: 580, cy: 200, no: 12 },
            { cx: 820, cy: 200, no: 13 },
            { cx: 580, cy: 110, no: 15 },
            { cx: 820, cy: 110, no: 14 },
            { cx: 110, cy: 30, no: 40 },    
        ],
        events:[

        ]
    }
]);