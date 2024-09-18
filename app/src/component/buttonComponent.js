import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { FetchChat } from '../action/fetchAction'

const HomePage = () => {
    let history = useHistory()
    const handleClick = () =>{
   history.push('/chat-page')
   FetchChat()
    }
    return (
        <>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <main>
                        <div class="jumbotron">
                            <h1 class="text-center text-primary">Go To Chat Page</h1>
                            <div>
                                <form class='form' autocomplete="off" name="adminlog" >

                                    <button className='btn btn-warning'id='buttonpage' onClick={handleClick}>chat page</button>

                                </form>
                            </div>
                        </div>
                    </main>
                </div>
                <div className='col-md-3'></div>
            </div>

        </>
    )
}
export default HomePage