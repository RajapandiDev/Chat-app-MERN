import isEmpty from 'is-empty';
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { FetchChat } from '../action/fetchAction'
let socket;
const url = 'http://localhost:2053'
socket = io(url)
const Fetch = () => {
  let initialValue = {
    userMsgOne: '',
    userMsgTwo: ''
  }
  const [response, setResponse] = useState([])
  const [formValue, setFormValue] = useState(initialValue)
  let { userMsgOne, userMsgTwo } = formValue



  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, ...{ [name]: value } })
  }




  const handleClick = (e) => {
    let Data = {
      messageby: e,
      message: userMsgOne
    }
    socket.emit('testing', Data)
  }


  const FetchData = () => {

    socket.on('testingEmit', data => {
      setResponse(data)
      if (data) {
        setFormValue({ userMsgOne: '', userMsgTwo: '' })
      }
    })

  }





  const handleClick1 = (e) => {

    let Data = {
      messageby: e,
      message: userMsgTwo
    }

    socket.emit('testing', Data)
  }





  useEffect(() => {
    FetchData()
    FetchChat()

  }, [])

  return (

    <>
      <div className='row'>
        <div className='col-md-6'>

          <div class="container bootstrap snippets bootdeys">
            <div class="col-md-7 col-xs-12 col-md-offset-2">
              <div class="panel" id="chat">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="icon wb-chat-text" aria-hidden="true"></i> user-1
                  </h3>
                </div>
                <div class="panel-body">
                  <div class="chats">
                    {
                      response && response.length > 0 && response.map(val => {

                        return (
                          <>
                            {
                              val.messageby == 'userOne' &&
                              <div class="chat">
                                <div class="chat-avatar">
                                  <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                                    <i></i>
                                  </a>
                                </div>
                                <div class="chat-body">
                                  <div class="chat-content">
                                    <p>{val.message}</p>
                                    <time class="chat-time" datetime="2015-07-01T11:37">11:37:08 am</time>
                                  </div>
                                </div>
                              </div>
                            }
                            {
                              val.messageby == 'userTwo' &&
                              <div class="chat chat-left">
                                <div class="chat-avatar">
                                  <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." />
                                    <i></i>
                                  </a>
                                </div>
                                <div class="chat-body">
                                  <div class="chat-content">
                                    <p>{val.message}</p>
                                    <time class="chat-time" datetime="2015-07-01T11:39">11:39:57 am</time>
                                  </div>
                                </div>
                              </div>
                            }
                          </>
                        )
                      })
                    }

                  </div>
                </div>
                <div class="panel-footer">
                  <form>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Say something"
                        name='userMsgOne'
                        value={userMsgOne}
                        onChange={handleChange}
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-primary" type="button" onClick={() => handleClick('userOne')}>Send</button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>

          <div class="container bootstrap snippets bootdeys">
            <div class="col-md-7 col-xs-12 col-md-offset-2">
              <div class="panel" id="chat">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <i class="icon wb-chat-text" aria-hidden="true"></i> user-2
                  </h3>
                </div>
                <div class="panel-body">
                  <div class="chats">
                    {
                      response && response.length > 0 && response.map(val => {

                        return (
                          <>
                            {
                              val.messageby == 'userTwo' &&
                              <div class="chat">
                                <div class="chat-avatar">
                                  <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                                    <i></i>
                                  </a>
                                </div>
                                <div class="chat-body">
                                  <div class="chat-content">
                                    <p>{val.message}</p>
                                    <time class="chat-time" datetime="2015-07-01T11:37">11:37:08 am</time>
                                  </div>
                                </div>
                              </div>
                            }
                            {
                              val.messageby == 'userOne' &&
                              <div class="chat chat-left">
                                <div class="chat-avatar">
                                  <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." />
                                    <i></i>
                                  </a>
                                </div>
                                <div class="chat-body">
                                  <div class="chat-content">
                                    <p>{val.message}</p>
                                    <time class="chat-time" datetime="2015-07-01T11:39">11:39:57 am</time>
                                  </div>
                                </div>
                              </div>
                            }
                          </>
                        )
                      })
                    }

                  </div>
                </div>
                <div class="panel-footer">
                  <form>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Say something"
                        name='userMsgTwo'
                        value={userMsgTwo}
                        onChange={handleChange}
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-primary" type="button" onClick={() => handleClick1('userTwo')}>Send</button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Fetch