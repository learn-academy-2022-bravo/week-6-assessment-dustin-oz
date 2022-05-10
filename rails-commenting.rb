# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Defines the class of BlogPostsController which Inherits from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) Creates an instance variable called @posts that will show all BlogPost(s)
    @posts = BlogPost.all
  end

  # ---3) Creates the Show method that will call a single blog post / single piece of information
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Creates the New method  that will render a new blog post entry 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This line creates a new blog post entry and passes in blog_post_params (parameters)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This line searches for a specific blog post that matches the passed in params and blog post id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This line updates a blog post using the passed in blog_post_params (parameters)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This line redirects to a blog post url if destroy not triggered
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Sets access to the information such that only users with access can access it. Secures the db so that it is unchangeable by the user nor visible.
  private
  def blog_post_params
    # ---10) This line ensures that we are are requiring certain information about our blogs. This was all established in the above code.
    params.require(:blog_post).permit(:title, :content)
  end
end
