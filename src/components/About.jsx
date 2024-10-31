import React from 'react'
import MernStack from '../assets/mernstack.png'
import JavaStack from '../assets/javastack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import typescript from '../assets/typescript.png'
import Angular from '../assets/Angular.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import JavaLogo from '../assets/JavaLogo.png'
import springboot from '../assets/springboot.png'
import pythonLogo from '../assets/pythonLogo.png'
import djangoLogo from '../assets/djangoLogo.png'
import awsLogo from '../assets/awsLogo.png'
import Jenkins from '../assets/jenkins.png'
import Ansible from '../assets/ansible.png'
import Terraform from '../assets/terraform.png'
import Jira from '../assets/jira.png'
import redis from '../assets/redis.png'
import postgreLogo from '../assets/postgreLogo.png'
import mysql from '../assets/mysql.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.png'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'
import docker from '../assets/docker.png'
import k8s from '../assets/k8s.png'
import linux from '../assets/linux.png'
import Microservices from '../assets/Microservices.png'
import devOpsLogo from '../assets/devOpsLogo.png'
import dsa from '../assets/dsa.png'
import elk from '../assets/elk.png'
import prometheusStack from '../assets/prometheusStack.png'
import jmeter from '../assets/jmeter.png'
import graphql from '../assets/graphql.png'
import kotlin from '../assets/kotlin.png'
import kafka from '../assets/kafka.png'
import maven from '../assets/maven.png'
import gcp from '../assets/gcp.png'
import git from '../assets/git.png'
import junit from '../assets/junit.png'
import sonar from '../assets/sonar.png'
import nexus from '../assets/nexus.png'
import tomcat from '../assets/tomcat.png'
import system from '../assets/system.png'
import theDevops from '../assets/theDevops.jpg'
import aadi1 from '../assets/aadi1.png'
import aadi2 from '../assets/aadi2.png'

import aadi3 from '../assets/aadi3.jpg'
import aadi4 from '../assets/aadi4.jpg'
import aadi5 from '../assets/aadi5.jpg'
import aadi6 from '../assets/aadi6.jpg'
import aadi7 from '../assets/aadi7.jpg'
import aadi8 from '../assets/aadi8.jpg'
import aadi9 from '../assets/aadi9.jpg'
import aadi10 from '../assets/aadi10.jpg'
import convoPic from '../assets/convoPic.jpg'
import convoPic2 from '../assets/convoPic2.jpg'
import convoPic3 from '../assets/convoPic3.png'


const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <div>
                            <div className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Bachchu Chatterjee.</div>
                            
                                
                                <div className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto inline-block'>
                                    People also knows me with another name, <strong>"Aaditya"</strong>, my nick name. I'm a Full-Stack Java Developer with expertise in Web and API development. I've also acquired 
                                    knowledge of DevOps with AWS Cloud.
                                </div>
                                <div>
                                <div className='mt-4 max-w-3xl text-xl text-purple-700 lg:mx-auto inline-block'>
                                  ALMA MATER - <span className='mt-4 max-w-2xl text-xl text-black lg:mx-auto inline-block'> MCA (session 2011-14) from University of Hyderabad, India.</span>
                                </div>
                                <div>
                                    <img src={convoPic} alt="convoPic" className='p-4 h-33 w-40 inline-block transform duration-500 transition-transform hover:scale-150' />
                                    <img src={convoPic2} alt="convoPic2" className='p-4 h-40 w-40 inline-block transform duration-500 transition-transform hover:scale-150' />
                                    <img src={convoPic3} alt="convoPic3" className='p-4 h-35 w-40 inline-block transform duration-500 transition-transform hover:scale-150' />
                                </div>
                                </div>
                            
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                    I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the Java
                                     full stack (Java, Spring boot, Microservices, Angular, React Js). I have built Projects such as a Java-full-stack AadiChatterBox, 
                                     e-commerce, etc. Also worked in MERN stack projects such as food ordering website, AadityaGram, etc. Learnt Python-Django stack 
                                     as well. My projects demonstrate my ability to integrate powerful backend solutions with user-friendly frontend designs.
                                </p>
                                <div className="flex">
                                    <img src={JavaStack} alt="" className='p-2 rounded-lg h-80 w-80 mt-4 inline-block' />
                                    <img src={MernStack} alt="" className='p-2 rounded-lg h-65 w-60 mt-4 inline-block' />
                                </div>
                                
                            </div>
                            <div className='border border-blue-200 rounded-lg md:p-5 py-5  flex flex-col gap-7 items-center shadow-lg shadow-blue-300'>
                                <h3 className='text-2xl font-semibold text-green-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>

                                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={git} alt="git" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Git</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt="html" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Css} alt="css" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Javascript} alt="Javascript" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={typescript} alt="typescript" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Typescript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={dsa} alt="dsa" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>DSA</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Angular} alt="angular" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Angular</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt="react" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReduxLogo} alt="redux" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Redux</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={JavaLogo} alt="Java" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Java</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={springboot} alt="Springboot" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Spring Boot</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Tailwind} alt="tailwind" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Bootstrap} alt="bootstrap" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={redis} alt="Redis" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Redis</span>
                                    </div>                                    
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={mysql} alt="MySQL" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>MySQL</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={postgreLogo} alt="PostgreSQL" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>PostgreSQL</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Mongodb} alt="Mongodb" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Mongo DB</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={NodeLogo} alt="NodeJs" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Node Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Express} alt="" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Express Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={NextJs} alt="" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Next Js</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Microservices} alt="microservices" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Microservices</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={graphql} alt="graphql" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>GraphQL</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={kafka} alt="kafka" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Kafka</span>
                                    </div>                                   
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={awsLogo} alt="aws" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>AWS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={kotlin} alt="kotlin" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Kotlin</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={pythonLogo} alt="python" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Python</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={djangoLogo} alt="django" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Django</span>
                                    </div>
                                    
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={docker} alt="Docker" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Docker</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={k8s} alt="K8s" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Kubernetes</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Jenkins} alt="Jenkins" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Jenkins</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Terraform} alt="Terraform" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Terraform</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={gcp} alt="gcp" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>GCP</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Ansible} alt="Ansible" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Ansible</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={maven} alt="maven" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Maven</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Jira} alt="Jira" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Jira</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={tomcat} alt="tomcat" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Tomcat</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={junit} alt="junit" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>JUnit</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={system} alt="system" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>System Design</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={sonar} alt="sonar" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>SonarQube</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={nexus} alt="nexus" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Nexus</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={devOpsLogo} alt="cicd" className='h-6 w-10 rounded-full' />
                                        <span className='font-semibold'>CICD</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={elk} alt="elk" className='h-6 w-12 rounded-full' />
                                        <span className='font-semibold'>ELK Stack</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={prometheusStack} alt="prometheusStack" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Prometheus</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={jmeter} alt="jmeter" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>JMeter</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={linux} alt="linux" className='h-6 w-8 rounded-full' />
                                        <span className='font-semibold'>Linux</span>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        <img src={theDevops} alt="" className='p-2 rounded-lg w-200 mt-4' />
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                            Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development 
                            or DevOps. An avid reader of non-fictional books, especially biographies & autobiographies. Geopolitics, Cricket and Movies are my other 
                            hobbies.
                        </p>
                        <p className='flex'>
                        <img src={aadi1} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi2} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi3} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi4} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi5} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi6} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi7} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi8} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi9} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        <img src={aadi10} alt="" className='p-2 rounded-lg h-20 w-30 mt-4 transform duration-500 transition-transform hover:scale-150' />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
