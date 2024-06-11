const data = {
    "_id" : {
      "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
      "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
      {
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "status": "notworkyet",
        "assets": [
          {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
          },
          {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
          },
          {
            "asset_id": 18885,
            "asset_title": "Structure you pointers ",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
          },
          {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
          }
        ]
      }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
  };


function createAssets(data1){
    let mainContent = "";
    if(data1.asset_id === 18883){
        mainContent = technical();
    }
    else if(data1.asset_id === 18884){
        mainContent = ThreadBuild();
    }
    else if(data1.asset_id === 18885){
        mainContent = pointers();
    }
    else{
        mainContent = method();
    }

    return `<div class="h-[36rem] w-[30rem] flex flex-col gap-6 shadow-lg rounded-xl">
                    <div class="w-full h-[3rem] bg-black relative flex items-center justify-center shadow-t-2xl rounded-t-xl">
                        <p class="text-white text-center">${data1.asset_title}</p>
                        <img src="Group 1735.png" alt="info" class="absolute right-5">
                    </div>

                    <div class="mx-5">
                        <span class="font-bold">Description :</span> ${data1.asset_description}
                    </div>
                    <div>` +
                    mainContent
                   + `</div>

                </div>`
}

function ThreadBuild(){
return `<div class="w-full">
                    <div class="flex relative justify-center items-center border-1 border-black">
                        <img src="upArrow.png" alt="arrow" class="w-[1rem] h-[10px] absolute left-5">
                        <p class="text-black font-bold ">Thread A</p>
                    </div>
                    <div class="flex mt-5">
                        <div class="flex flex-col m-5 relative h-[6rem] w-[199px]">
                        <label for="thread" class="rounded-xl w-full text-center h-10 bg-slate-200 border-blue-300 text-sm">Sub thread 1</label>
                        <input type="text" id ="thread" class="h-[5rem] w-full shadow-md absolute top-6 rounded-xl dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:outline-4 focus:outline-blue-200" placeholder="Enter Text Here">
                        </div>
                        <div class="flex flex-col m-5 relative h-[6rem] w-[199px]">
                            <label for="thread" class="rounded-xl w-full text-center h-10 bg-slate-200 border-blue-300 text-sm">Sub Interpretation 1</label>
                            <input type="text" id ="thread" class="h-[5rem] w-full shadow-md absolute top-6 focus:outline-none focus:outline-4 focus:outline-blue-200 rounded-xl" placeholder="Enter Text Here">
                            </div>
                        
                    </div>
                    <div class="flex justify-end gap-3 w-full items-center mt-5">
                        <img src="Group 1588.png" alt="no" class="h-[20px] w-[117px]">
                        <div class="flex gap-4 mr-5">
                            <button
                            class="bg-white dark:bg-zinc-800 text-black dark:text-white font-semibold py-2 px-2 rounded-lg shadow-md flex items-center"
                          >Select catlog <img src="downArrow.png" alt="down"></button>
                          <button
                          class="bg-white dark:bg-zinc-800 text-black dark:text-white font-semibold py-2 px-2 rounded-lg shadow-md flex items-center"
                        >Select Process <img src="downArrow.png" alt="down"></button>
                        </div>
                    </div>
                    <div class=" mt-5 mx-5">
                        <button class="rounded-xl bg-blue-700 text-white px-5 py-2 flex items-center  text-lg font-semibold gap-1 relative"><p class="font-bold  text-white text-xl">+</p> Sub thread</button>
                        <div class="flex flex-col mt-5 relative h-[6rem] w-full">
                            <label for="thread" class="rounded-xl w-full text-center h-10 bg-slate-200 border-blue-300 focus:outline-none focus:outline-4 focus:outline-blue-200 text-sm">Sub Interpretation 1</label>
                            <input type="text" id ="thread" class="h-[5rem] w-full shadow-md absolute top-6 rounded-xl focus:outline-none focus:outline-4 focus:outline-blue-200" placeholder="Enter Text Here">
                            </div>
                    </div>
                    </div>`
}

function technical(){
    return `<div class="w-full mt-5">
                        <iframe src="https://www.youtube.com/embed/TiMRwri1xJ8" frameborder="0" class="w-full h-[291px]"></iframe>
                    </div>`
}


function method(){
   return `<div class="w-[85%] mx-auto flex flex-col gap-5">
                            <label for="box" class="font-semibold text-lg">Title</label>
                            <input type="text" id="box" class="w-full h-[3rem] shadow-md border-blue-400 focus:outline-none focus:outline-blue-200 focus:outline-4">
                        </div>
                        <div class="w-[85%] mx-auto flex flex-col gap-5 mt-5 h-[250px]">
                            <label for="box2" class="font-semibold text-lg">Content</label>
                            <div id="box2" class="w-full shadow-md dark:bg-zinc-800 bg-white dark:shadow-md-lg h-full">
                                <div class="p-2 bg-white dark:bg-zinc-800 shadow-md rounded-t-md">
                                    <div class="flex space-x-4 text-zinc-700 dark:text-zinc-300 text-xs justify-evenly">
                                      <span class="cursor-pointer">File</span>
                                      <span class="cursor-pointer">Edit</span>
                                      <span class="cursor-pointer">View</span>
                                      <span class="cursor-pointer">Insert</span>
                                      <span class="cursor-pointer">Format</span>
                                      <span class="cursor-pointer">Tools</span>
                                      <span class="cursor-pointer">Table</span>
                                      <span class="cursor-pointer">Help</span>
                                    </div>
                                    <div class="flex space-x-4 mt-2">
                                      <img src="https://placehold.co/24x24" alt="undo" class="cursor-pointer" />
                                      <img src="https://placehold.co/24x24" alt="redo" class="cursor-pointer" />
                                      <img src="https://placehold.co/24x24" alt="fullscreen" class="cursor-pointer" />
                                      <div
                                        class="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-md cursor-pointer"
                                      >
                                        Paragraph
                                      </div>
                                      <img src="https://placehold.co/24x24" alt="more options" class="cursor-pointer" />
                                    </div>
                                  </div>
                                  <div class="p-2 bg-white dark:bg-zinc-800 shadow-md rounded-t-md h-full">
                                    <textarea name="" id="" class="w-full h-full focus:outline-none focus:outline-4 focus:outline-blue-200"></textarea>
                                  </div>
                            </div>
                        </div>
                    </div>`
}


function pointers(){
    return `<div class="w-full h-[400px]">
                        <div class="flex gap-5 items-center relative bg-Gray w-[90%] mx-auto px-2 py-2">
                            <img src="upArrow.png" alt="up" class="">
                            <p class="font-bold ">Introduction</p>
                        </div>
                        <div class="w-[90%] mx-auto relative mt-5">
                        <p>The 4SA Method , How to bring a idea into progress ?</p>
                        <button class="text-slate-500 absolute right-3">read more</button>
                        </div>
                            <div class="flex gap-5 items-center relative border-grey-800 border w-[90%] mx-auto px-2 py-2 mt-10">
                                <img src="upArrow.png" alt="up" class="">
                                <p class="font-bold ">Thread</p>
                            </div>
                            <div class="w-[90%] mx-auto relative mt-5">
                                <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                                <button class="text-slate-500 absolute right-3">read more</button>
                                </div>    
                        
                     </div>`
}


data.tasks[0].assets.map( (data) => {
  let assets = document.querySelector("#assets");
  let newDiv = document.createElement("div");
  newDiv.innerHTML = createAssets(data);
  assets.appendChild(newDiv);
})






