var pathArray = context.getVariable("message.uri").split("/");
context.setVariable( "firstPathElement", pathArray[2] );
context.setVariable( "secondPathElement", pathArray[4] );