import './Blogs.css'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import Blog from './Blog';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            blogName: "GitHub — Use/manage multiple accounts on single system",
            description: "For long time I have been trying to setup two GitHub accounts on my windows system. After trying many solutions I got my way of setting up this. So I have documented procedure in details with multiple steps for the benefit of one and all",
            date: "February 2022",
            link: "https://medium.com/@saurabhghuge/github-use-manage-multiple-accounts-on-single-system-1906dfdbe512"
        }
    ]

    return (
        <div className='frontpage blogs' id='Blogs'>
            <div className='container'>
                <br></br>
                <br></br>
                <h1 className="text-start text-dark sectiontopmargin">
                    Blogs
                </h1>
                <br></br>
                <VerticalTimeline
                    animate={true}
                    layout={'1-column-left'}
                    lineColor={'black'}>
                    {blogs.map(blog => {
                        return <Blog
                            blogName={blog.blogName}
                            description={blog.description}
                            date={blog.date} 
                            link = {blog.link}/>
                    })}
                </VerticalTimeline>
            </div>
            <br></br>
        </div>
    );
}

export default Blogs;