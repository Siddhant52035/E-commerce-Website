import User from "../models/User.js";
export const login = async (req, res) => {


    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return res.status(404).send("User not found");
    } else {
        if (password != user?.password) {
            return res.status(400).send("Invalid Password");
        } else {
            return res.status(200).json({
                success: "true",
                message: "Login Successful",
                user,

            })

        }

    }

}

export const signup = async (req, res) => {
    const user = req.body

    await User.create(user);


    res.json({
        sucess: "true",
        message: "User created Successfully",
        user,

    });
}