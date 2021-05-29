className = "row" 

<small> {bug.id }</small>
              <div id = "type" > {bug.type} </div>
              <div id = "importance"> {bug.importance} </div>
              <div id = "assignee"> {bug.assignee} </div>
              <div id = "comments"> {bug.comments} </div>
              <div id = "deleteButton"> 
                <Button variant = "warning" onClick = {()=>{document.getElementById("edit").style.display = "block"}}> edit </Button> 
                <Button variant = "danger" onClick = {()=>{deleteId(bug.id)}}> delete </Button></div>
                <Card id = "edit" style = {{display: "none"}} className = "k">
                  <Editor id = {bug.id} />
                </Card>