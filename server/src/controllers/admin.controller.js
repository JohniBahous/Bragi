import { prisma } from "../services/prismaClient.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export async function getAllAdmins(req, res) {
    const admins = await prisma.admin.findMany({});
  res.json(admins);
}

export async function getAdminById(req, res) {
    const {uuid} = req.params;
    const admin = await prisma.admin.findUnique({
        where: {
            uuid: uuid,
    }
  })
  res.json(admin);
}

export async function adminLogin(req, res) {
    const { uuid } = req.params;
    const { password } = req.body;

    const admin = await prisma.admin.findUnique({
      where: { uuid }
    });

    if (!admin) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    const isMatched = await bcrypt.compare(password, admin.hashedPassword);

    if (!isMatched) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

 
    const token = jwt.sign(
      { adminId: admin.uuid },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );


    res.cookie("admin_token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
      maxAge: 60 * 60 * 1000
    });

    return res.json({
      success: true,
      admin: { uuid: admin.uuid, name: admin.name }
    });    
}

export async function adminLogout(req, res) {

    res.clearCookie("admin_token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.json({ message: "Logged out" });   
}

export async function adminAudit(req, res) {
    const {uuid, name, action} = req.body
    await prisma.audit.create({
        data:{
            adminUuid: uuid,
            adminName: name,
            action: action,
        }
  })
  res.json({ message: 'Audit updated successfully' });
}