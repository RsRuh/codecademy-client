import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../share/LeftSideNav';
import CoursesCard from './CoursesCard';


const Courses = () => {
    const allCourses = useLoaderData();
    
    return (
        <div> 
            <div>
                <div className="flex">
                    <LeftSideNav allCourses={allCourses}></LeftSideNav>
                    <div className="container mx-auto mt-12">
                        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 justify-items-center">
                                {
                                    allCourses.map((courses, id) => <CoursesCard key={id}  courses={courses}></CoursesCard>)
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;