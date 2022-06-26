const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function(arrOfTasks) {
  const objTasks = arrOfTasks.reduce((acc,task)=>{
    acc[task._id] = task;
    return acc;
  },{});

  // Elements UI
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  const form = document.forms['addTask']
  const inputTitle = form.elements['title']
  const inputBody = form.elements['body']

  
  //Events
  renderAllTasks(objTasks)
  form.addEventListener('submit', formsSubmit);
  listContainer.addEventListener('click', idDeletetasks)

  
  function renderAllTasks (taskList) {
    if (!taskList){
      console.error('Передайтe список задач!')
      return;
    }
    
    const fragment = document.createDocumentFragment();
    Object.values(taskList).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);

  }

  function listItemTemplate({_id, title, body} = {}){
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2',
    );
    li.setAttribute('data-task-id', _id)
    
    const span = document.createElement('span')
    span.textContent = title
    span.style.fontWeight = 'bold'

    const btn = document.createElement('button')
    btn.classList.add(
      'btn',
      'btn-danger',
      'ml-auto',
      'delete-btn',
    );
    btn.textContent = 'Delete'

    const p = document.createElement('p')
    p.classList.add(
      'mt-2',
      'w-100',
    )
    p.textContent = body;

    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(p)

    return li;
  }
  
  function formsSubmit (e){
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;
    console.log(titleValue, bodyValue)

    if(!titleValue || !bodyValue){
      alert('Пожалуйста введите tiile и body')
      return;
    }
    const task = createNewTask(titleValue, bodyValue)
    const List = listItemTemplate(task)
    listContainer.insertAdjacentElement('afterbegin', List)
    form.reset();
  }

  function createNewTask(title, body){
    const newTask  = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };
    objTasks[newTask._id] = newTask;
    return {...newTask}
  }

  function DeleteTasks (id){
    const {title} = objTasks[id];
    const isConfirm = confirm(`Вы точно хотите удалить задачу:${title}`)
    if(!isConfirm) return isConfirm;
    delete objTasks[id]
    return isConfirm;
    
  
  }

  function deleteTasksFromHtml(confirmed, e){
    if (!confirmed) return;
    e.remove();
  }

  function idDeletetasks ({target}){
    if (target.classList.contains('delete-btn')) {
    const parent = target.closest('[data-task-id]')
    const id = parent.dataset.taskId;
    const confirmed = DeleteTasks(id);
    deleteTasksFromHtml(confirmed,parent)
    }
  }
})(tasks);
