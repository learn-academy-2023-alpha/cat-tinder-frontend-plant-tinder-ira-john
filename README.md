# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




1

2





Search LEARN





LEARN
More unreads















Ira Holmes



Ira Holmes


Ira Holmes
  2:32 PM
Create-Functionality-Notes.md
 
Create-Functionality-Notes.md
​
In PlantNew.js file
import form variables- import {form,}
after adding changes to the App.js file add the prop ({createPlants}) to the PlantNew function below 
const PlantNew = () {
    const [newPlant, setNewPlant] = useState ({
        name: "",
        age: "",
        enjoys: "",
        image: "",
    })
    return (
​
     in PlantNew add the Form code from reactstrap and get rid of any sections in the code that you don't need.
    import the reactstrap route
​
    Change label name
​
    in the <Input set name = "name" , placeholder="What is your name"
    type="text"
    change password to Age and change the from above it to for = "age" , sm={2}
    >
    In <Input name="age" placeholder="What is your age", type="number"
​
    below this add for="enjoys", sm={2}
    >
    Enjoys <Input name="enjoys" , type="text">
​
    after this do image for="image, sm={2}
    <input name="image" , type="text"    
    )
}
​
    Add above the return 
    const handleChange = (e) => {
   // console.log(e.target.value)
        setNewPlant({...newPlant, [e.target.name]: e.target.value})
}
​
const handleSubmit = () => {
    createPlant(newPlant) (add an onClick={handleSubmit} name= to the button section of the form)
}
​
console.log(newPlant)
return(
​
​
add the (onChange=handleChange) to all inputs within the form code below the type= input
​
​
​
​
​
​
​
​
​
    end at the bottom of the form code.
)
------------------------------
in App.js
const App = () => {
const [plants, setPlants] = useState(mockPlants) => {
    console.log("Created plant:", plant)
}
)
}
​
-----------------------------------------------------------
Routing back to the main page
above the useState function in PlantNew.js setup
​
const navigate = useNavigate()
​
add navigate("/plantindex") under the createdPlant(newPlant) handle submit function.
​
------------------------------------------------------------
create PlaneNew.test.js
​
copy and paste from another test file and remove uneeded subscribes
​
describe ("<PlantNew />", () => {
    beforeEach(() = > {
        <BrowserRouter>
            <CatNew />
        </BrowserRouter>
    )
    it("renders the PlantNew page for the user", () => {
        const inputTitle = screen.getByText("Plant Name")
            expect (inputTitle).toBeInTheDocument()
    })
​
    it("has a form with entries for name, age, enjoys, and image", () => {
        cost formName = screen.getByText(/plant name/i)
        expect(formName.getAttribute("for")).toEqual("name")
    })
   
    it("has a form with entries for name, age, enjoys, and image", () => {
        cost formName = screen.getByText(/plant age/i)
        expect(formName.getAttribute("for")).toEqual("age")
    })
    
    it("has a form with entries for name, age, enjoys, and image", () => {
        cost formName = screen.getByText(/enjoys/i)
        expect(formName.getAttribute("for")).toEqual("enjoys")
    })
​
    it("has a form with entries for name, age, enjoys, and image", () => {
        cost formName = screen.getByText(/image url/i)
        expect(formName.getAttribute("for")).toEqual("image")
    })
})
