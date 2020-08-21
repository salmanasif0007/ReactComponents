            @@@@@@@@@@         write          @@@@@@@@@@
            
            
            
            
  const messageRef = firebase.database().ref('Message');
  const message = {
      data:this.props.product
  }; 
  
  messageRef.push(message);
  
  
  
              @@@@@@@@@@         read          @@@@@@@@@@
              
              
              
              
              
    const [todoList, setTodoList] = useState();
    useEffect(() => {
    const todoRef = firebase.database().ref('Message');
    todoRef.on('value', (snapshot) => {
        const todos = snapshot.val();
        const todoList = [];
        for (let id in todos) {
        todoList.push({ id, ...todos[id] });
        }
        setTodoList(todoList);
        
    });
    }, []);
    
    return (
        
        <div>
    <Container  id="box" fluid>
    <ScrollableFeed>
                
            {todoList
            ? todoList.map((todo) =>
            <Row key={todo.id} style={{marginTop:"10px"}}>
                    {todo.name.photoURL ?(
                     
                     
                     
                     
                     
             @@@@@@@@@   delete   @@@@@@@@
                     
                     
                     
                     
                     
function deleteButtonClicked(e) {
    e.stopPropagation();
    const userID = e.target.getAttribute("userid");
    const userRef = dbRef.child('users/' + userID);
    userRef.remove()
}
