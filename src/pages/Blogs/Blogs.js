import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Frequenctly Asked Questions</h1>
            <div className="my-5">
                <h5>Difference between authorization and authentication:</h5>
                <table className='w-100' border='1px'>
                    <thead>
                        <tr>
                            <th>Authentication</th>
                            <th>Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Authentication verifies who the user is.</td>
                            <td>Authorization determines what resources a user can access.</td>
                        </tr>
                        <tr>
                            <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                            <td>Authorization works through settings that are implemented and maintained by the organization.</td>
                        </tr>
                        <tr>
                            <td>Authentication is the first step of a good identity and access management process.</td>
                            <td>Authorization always takes place after authentication.</td>
                        </tr>
                        <tr>
                            <td>Authentication is visible to and partially changeable by the user.</td>
                            <td>Authorization isn’t visible to or changeable by the user.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="my-5">
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p><span style={{ fontWeight: 'bold' }}>Firebase:</span> Firebase give us the benifits to host website and set up authentication system easily. So we the newbies don't fall in trouble in handling users data. It has other functional and analytic  tools that easily can be deployed in site. After all it is helping web developers to managing backend of a site perfectly.<br /><span style={{ fontWeight: 'bold' }}>Alternative of Firebase:</span> Some Alternative of firebase are: <li>Parse</li>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Couchbase</li> etc.
                </p>
            </div>
            <div className="my-5">
                <h5>What other services does firebase provide other than authentication?</h5>
                <p>Other services of firebase:
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage.</li>
                    <li>Google Analytics</li>
                    <li>Predictions.</li>
                    <li>Cloud Messaging.</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;