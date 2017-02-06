import * as React from 'react'
import { IndexRoute, Route } from 'react-router'

import Layout from '../pages/Layout'
import HomePage from '../pages/Home'
import PostPage from '../pages/Post'
import CreatePostPage from '../pages/CreatePost'
import UserPage from '../pages/User'
import ExporePage from '../pages/Expore'
import AboutPage from '../pages/About'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/expore" component={ExporePage} />
    <Route path="/post/new" component={CreatePostPage} />
    <Route path="/post/:pid" component={PostPage} />
    <Route path="/user/:uid" component={UserPage} />
  </Route>
)
