import React from 'react'

const About = () => {
    return (
        <div className="about">
            <h2>Need tracking and finding a best deal to shop online?</h2>

            <h4>What are you waiting for? Pprolist is here to rescue.</h4>
            <p>Pprolist helps you create profile of vendors you shop from,
                Enter similar products they sell, discounts they may provide,
                and gives you the convenience of choosing your purchase much easier.
                You can update the list by deleting products or
                deleting vendors.

                My stretch goals for this project is to add user authentication, 
                create a dashboard that provide personal account for tracking 
                numerous activities. 

                This app is built based on JavaScript, utilizing the power of React
                and Redux to track and manage states in different part of this app, and
                using Ruby on Rails as a backend api to handle storage and database
                management. 

                <div>
                    You can visit my repos mentioned below to explore codebase and provide feedback 
                    should there be an opportunity to pull request to make this app works better:

                    <div>
                    <li><a href="https://github.com/pjavadi84/pprolist-clientside" target="blank">Front-end codebase</a></li>
                    </div>
                    
                    <div>
                    <li><a href="https://github.com/pjavadi84/pprolist-serverside" target="blank">Back-end codebase</a></li>

                    </div>

                    I hope you enjoy this project as much as I document

                    Good vibes!

                    Pouya 
                </div>
            </p>
        </div>
    )
}

export default About