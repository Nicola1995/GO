class ContaktsController < ApplicationController
	def index
	@text_z = "";
	if session[:lang] == 0
 then @text_z = "Вы можете связаться с директором клуба по интересующим Вас вопросам. Это очень простой способ решить организационные вопросы, связанные с участием в турнирах, сотрудничеством, обучением игре."
	else
	@text_z = "So, here is english version. NIKOLa, do it!))))";
	end
        @text_z;
	end
end
