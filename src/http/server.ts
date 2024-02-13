import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";
import webSockets from "@fastify/websocket";
import { pollResult } from "./ws/polls-results";
const app = fastify()
app.register(cookie, {
  secret: "jnsdns",
  hook: "onRequest",
})
app.register(webSockets)
app.register(createPoll)

app.register(getPoll)

app.register(voteOnPoll)


app.register(pollResult)

app.listen({port: 3333}).then(() => {
  console.log("Server running")
})