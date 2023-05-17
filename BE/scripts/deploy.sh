#!/bin/bash

REPOSITORY=/home/ubuntu/app/step2
PROJECT_NAME=issue-tracker

echo "> Build 파일복사"
cp $REPOSITORY/zip/*.jar $REPOSITORY/

echo "> 현재 구동 중인 애플리케이션 pid 확인"
#CURRENT_PID=$(pgrep -fl issue-tracker-0.0.1-SNAPSHOT | grep jar | awk '{print $1}')
#
#echo "현재 구동 중인 해플리케이션 pid: $CURRENT_PID"
#if [ -z "$CURRENT_PID" ]; then
#  echo "> 현재 구동 중인 애플리케이션이 없으므로 종료하지 않습니다."
#else
#  echo "> 현재 구동 중인 애플리케이션 종료"
#  kill -15 $CURRENT_PID
#  sleep 5
#
#  echo "> 종료 확인 중인 애플리케이션 PID: $CURRENT_PID"
#  sleep 1
#fi
CURRENT_PID=$(pgrep -f ${PROJECT_NAME}.*.jar)
if [ -z "$CURRENT_PID" ]; then
  echo "> 현재 구동 중인 애플리케이션이 없으므로 종료하지 않습니다."
else
  echo "> 현재 구동 중인 애플리케이션 종료"
  kill -15 $CURRENT_PID
  sleep
fi

echo "> 새 애플리케이션 배포"

JAR_NAME=$(ls -tr $REPOSITORY/*.jar | tail -n 1)

echo "> JAR NAME: $JAR_NAME"
echo "> $JAR_NAME 에 실행권한 추가"
chmod +x $JAR_NAME

echo  "> $JAR_NAME 실행"

#nohup java -jar \
#  -Dspring.config.location=classpath:/application.properties,classpath:/application-real.properties,/home/ec2-user/app/application-oauth.properties,/home/ec2-user/app/application-real-db.properties \
#  -Dspring.profiles.active=real \
#  $JAR_NAME  > $REPOSITORY/nohup.out 2>&1 &
nohup java -jar $JAR_NAME > $REPOSITORY/nohup.out 2>&1 &
