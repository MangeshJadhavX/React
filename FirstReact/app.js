const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement('h1',{
    id : 'heading',
    xyz : 'xyz', //set random attribute
    class : 'header'

},'react heading');
root.render(heading);