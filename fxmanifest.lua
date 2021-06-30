fx_version "cerulean"
game "gta5"

client_script {
	"game/client/**/*.lua",
	"game/dist/client/*.js"
}
server_script "game/dist/server/*.js"

files {
	"game/shared/config.json"
}