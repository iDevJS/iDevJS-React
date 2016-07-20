import * as React from 'react'

interface PostItemProps {
  post: any
}

interface PostItemState{

}


class PostItem extends React.component<PostItemProps, PostItemState> {
  constructor(props, context) {
    super(props, context)
    
  }
  render(){
    return (
      <div></div>
    )
  }
}