import bcrypt from "bcryptjs";
import { supabase } from "./supabase";

export async function loginUsuario(usuario, senhaDigitada) {
  const { data, error } = await supabase
    .from("usuarios")
    .select("id, usuario, senha, nome, perfil, ativo")
    .eq("usuario", usuario)   // 🔴 minúsculo
    .eq("ativo", true)
    .maybeSingle();           // 🔴 NUNCA use single()

  if (error || !data) {
    return null;
  }

  const senhaOk = bcrypt.compareSync(senhaDigitada, data.senha);
  if (!senhaOk) {
    return null;
  }

  return {
    id: data.id,
    usuario: data.usuario,
    nome: data.nome,
    perfil: data.perfil,
  };
}
