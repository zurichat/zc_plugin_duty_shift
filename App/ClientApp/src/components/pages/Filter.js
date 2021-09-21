import React, { Component } from 'react'
import './Stylefilter.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


class Filter extends Component {
    render() {
        return (
            <div className="container_body">
                <div className="container-fluid">
                   <div className="search_container">
                        <div className="row">
                            <div className="col-8">
                                <input className="search_input px-3" type="text" placeholder="Search here" name="search" />
                            </div>
                            <div className="col-4">
                                <div className="picture_cover">
                                    <img className="profile_img" src={require('./images/profile-image.png').default} alt="profile_picture"/>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>

                
                <div className="cover_nav">
                    <div className="container-fluid">
                        <div clasName="row">
                            <div className="col-12">
                                <h5 className="hash"># </h5> 
                                <select className="select_cover">
                                    <option className="options" value="">Company Duty Shift</option>
                                    <option className="options">Select</option>
                                    <option className="options">Select</option>
                                </select>

                                <div className="float-right pr-0 mr-0">
                                    <img className="online-people_img" src={require('./images/online_people.png').default} alt="profile_picture"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sub_nav">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-5">
                                <select className="design_drop_down">
                                    <option className="options" value="">All Departments</option>
                                    <option className="options">Design</option>
                                    <option className="options">Frontend</option>
                                    <option className="options">Digital Marketing</option>
                                    <option className="options">DevOps</option>
                                </select>

                                <button className="shift_button">Add New Shift</button>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-7 text-right">
                                <button className="date_cover">
                                    <span className="navigation_arrow">&#60; </span>
                                    <img className="search_icon_img pb-1" src={require('./images/calendar.png').default} alt="profile_picture"/>
                                    <span>13th September 2021</span>
                                    <span className="navigation_arrow"> &#62;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sub_nav_two">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-9">
                                <h5 className="task">Task: </h5> 
                                <select className="design_drop_down">
                                    <option className="options" value="">All Tasks</option>
                                    <option className="options">Design a checkout page</option>
                                    <option className="options">Design a style guide</option>
                                </select>
                            </div>

                            <div className="col-lg-3 text-right">
                                <div className="right_search_cover">
                                    <input className="right_search" type="text" placeholder="Search" />
                                    <img className="search_icon_img" src={require('./images/search.png').default} alt="profile_picture"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="data_cover">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-12">
                                <div className="row heading_cover">
                                    <div className="col-lg-3 col-6 heading">Staff Name</div>
                                    <div className="col-lg-3 d-lg-block d-none heading">Task</div>
                                    <div className="col-lg-3 d-lg-block d-none heading">Lead</div>
                                    <div className="col-lg-2 col-6 heading">Shift Time</div>
                                    <div className="col-lg-1 d-lg-block d-none heading"></div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="row task_details">
                                    <div className="col-lg-3 col-6">
                                        <div className="row">
                                            <div className="col-3">
                                                <img className="avatar_img mr-0 pr-0" src={require('./images/demo-image.png').default} alt="profile_picture"/>
                                            </div>
                                            <div className="col-9">
                                                <h6 className="tag_heading">Sammuel Benjamin</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 d-lg-block d-none">
                                        <h6 className="tag_heading">Design a checkout page</h6>
                                    </div>

                                    <div className="col-lg-3 d-lg-block d-none">
                                        <h6 className="tag_heading">Charles Dim</h6>
                                    </div>

                                    <div className="col-lg-3 col-6">
                                        <h6 className="tag_heading">8:00am - 10:00am 
                                            <div className="tag_delete">
                                                <img className="float-right px-3" src={require('./images/delete.png').default}/>
                                                <img className="float-right px-3" src={require('./images/tag.png').default}/>
                                            </div>
                                        </h6>
                                    </div>
                                </div>
                            </div>




                            <div className="col-12">
                                <div className="row task_details">
                                    <div className="col-lg-3 col-6">
                                        <div className="row">
                                            <div className="col-3">
                                                <img className="avatar_img mr-0 pr-0" src={require('./images/demo-image.png').default} alt="profile_picture"/>
                                            </div>
                                            <div className="col-9">
                                                <h6 className="tag_heading">Ogochukwu Emmanuel</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 d-lg-block d-none">
                                        <h6 className="tag_heading">Design a checkout page</h6>
                                    </div>

                                    <div className="col-lg-3 d-lg-block d-none">
                                        <h6 className="tag_heading">Charles Dim</h6>
                                    </div>

                                    <div className="col-lg-3 col-6">
                                        <h6 className="tag_heading">10:00am - 12:00pm
                                            <div className="tag_delete">
                                                <img className="float-right px-3" src={require('./images/delete.png').default}/>
                                                <img className="float-right px-3" src={require('./images/tag.png').default}/>
                                            </div>
                                        </h6>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12">
                                <div className="row task_details green">
                                    <div className="col-lg-3 col-6">
                                        <div className="row">
                                            <div className="col-3">
                                                <img className="avatar_img mr-0 pr-0" src={require('./images/demo-image.png').default} alt="profile_picture"/>
                                            </div>
                                            <div className="col-9">
                                                <h6 className="tag_heading">Eke John</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 d-lg-block d-none">
                                        <h6 className="tag_heading">Design a checkout page</h6>
                                    </div>

                                    <div className="col-lg-3 d-lg-block d-none">
                                        <h6 className="tag_heading">Charles Dim</h6>
                                    </div>

                                    <div className="col-lg-3 col-6">
                                        <h6 className="tag_heading">12:00px - 2:00pm 
                                            <div className="tag_delete">
                                                <img className="float-right px-3" src={require('./images/delete.png').default}/>
                                                <img className="float-right px-3" src={require('./images/tag.png').default}/>
                                            </div>
                                        </h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Filter;
