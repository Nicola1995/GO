class ArticlesController < ApplicationController
  http_basic_authenticate_with name: "lasarev", password: "1234567", :only => [:destroy, :create, :addel, :new] 
  def index
    @articles = Article.all
  end
  def show
    @article = Article.find(params[:id])
  end
  def new
  end
  def edit
  end
  
  def addel
    @articles = Article.all
  end
   def destroy
    @article = Article.find(params[:id])
    @article.destroy
 
    redirect_to articles_addel_path
  end
  def create
   @article = Article.new(article_params)

    respond_to do |format|
      if @article.save

        if params[:images]
          # The magic is here ;)
          params[:images].each { |image|
            @article.pictures.create(image: image)
          }
        end

        format.html { redirect_to @article, notice: 'article was successfully created.' }
        format.json { render json: @article, status: :created, location: @article }
      else
        format.html { render action: "new" }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :text, :image, :image_file_name)
  end
end
