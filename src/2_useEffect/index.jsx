import { UseEffectBasics } from "./UseEffectBasics";
import UseEffectFetch from "./UseEffectFetch";
import { UseEffectCleanUp } from "./UseEffectCleanUp";

export const UseEffectIndex = () => {
    return (
        <>
            <h1 className="headline">useEffect Hook</h1>
            <UseEffectBasics />
            <br />
            <UseEffectFetch />
            <br />
            <UseEffectCleanUp />
            <br />
            <hr />
        </>
    );
} 