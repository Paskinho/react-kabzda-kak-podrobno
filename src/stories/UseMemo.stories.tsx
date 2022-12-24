import React, {useState} from 'react'

export default {
    title: 'useMemo',
}

    export const Example1 = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)


    return <>
<input value={a} onChange={(e)=> setA(Number(e.currentTarget.value))}/>
<input value={b} onChange={(e)=> setB(+(e.currentTarget.value))}/>
        <hr>
        <div>
            Result for a: {}
        </div>
            <div>
                Result for b: {}
            </div>
        </hr>


    </>
    }

