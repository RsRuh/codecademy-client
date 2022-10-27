import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({allCourses}) => {

    return (
        <div className="md:flex flex-col h-screen p-3 bg-white hidden shadow w-60">
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <h2 className="text-xl font-bold">Dashboard</h2>
                            </div>
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-1 text-sm">
                                    <li className="rounded-sm">
                                        <div>
                                            {
                                                allCourses.map((courses, id) => <Link key={id} to={`/details/${courses._id}`} className="flex items-center p-2 text-lg font-semibold space-x-3 rounded-md hover:bg-gray-100">
                                                <span>{courses.name}</span>
                                            </Link>)
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    );
};

export default LeftSideNav;