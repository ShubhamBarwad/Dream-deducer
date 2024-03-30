import React from 'react';
import { analyseDream } from '@/app/lib/action/AnalyseDream';

async function Dream() {
    let analysis;
    console.log('analysis', await analysis);
    return (
        <>
            <form className='max-w-96 mx-auto flex flex-col gap-5 my-3' action={analysis = await analyseDream}>
                <label className='text required'>
                    <span>Tell me about your dream</span>
                    <textarea className='form-input' name='dream' placeholder="Tell me about your dream..." rows={5} required />
                </label>
                <div className='flex flex-row gap-4'>
                    <label className='checkbox'>
                        <input className='form-checkbox' type="checkbox" name="sleep-quality" id="" />
                        <span>Slept Well</span>
                    </label>
                    <label className='checkbox'>
                        <input className='form-checkbox' type="checkbox" name="sleep-quality" id="" />
                        <span>Didn't sleep well</span>
                    </label>
                </div>
                <button className='btn btn-primary' type="submit">Find what my dreams mean</button>
            </form>
            {/* {
                analysis && <pre>{JSON.stringify(analysis, null, 2)}</pre>
            } */}
        </>
    )
}

export default Dream